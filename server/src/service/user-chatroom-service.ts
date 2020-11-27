import { getCustomRepository } from 'typeorm';
import UserChatroomRepository from '@repository/user-chatroom-repository';
import SectionRepository from '@repository/section-repository';
import { Transactional } from 'typeorm-transactional-cls-hooked';
import NotFoundError from '@error/not-found-error';

class UserChatroomService {
  static instance: UserChatroomService;

  sectionRepository: SectionRepository;

  userChatroomRepository: UserChatroomRepository;

  constructor() {
    this.sectionRepository = getCustomRepository(SectionRepository);
    this.userChatroomRepository = getCustomRepository(UserChatroomRepository);
  }

  static getInstance(): UserChatroomService {
    if (!UserChatroomService.instance) {
      UserChatroomService.instance = new UserChatroomService();
    }
    return UserChatroomService.instance;
  }

  @Transactional()
  async getUserChatrooms(userId: number) {
    const userChatrooms = await this.userChatroomRepository
      .createQueryBuilder('userChatroom')
      .where('userChatroom.user.userId = :userId', { userId })
      .leftJoinAndSelect('userChatroom.chatroom', 'chatroom')
      .getMany();

    if (!userChatrooms) {
      throw new NotFoundError();
    }

    const starred = this.classifyChannelsBySectionName(userChatrooms, 'Starred');
    const otherSections = await this.classifyOtherSections(userChatrooms, userId);
    const channels = this.classifyChannelsBySectionName(userChatrooms, 'Channels');
    const directMessages = await this.classifyDirectMessages(userChatrooms, userId);

    return { starred, otherSections, channels, directMessages };
  }

  private classifyChannelsBySectionName(userChatrooms: any[], sectionName: string) {
    return userChatrooms
      .filter((userChatroom) => userChatroom.sectionName === sectionName)
      .map((userChatroom) => {
        const { chatroomId, title, isPrivate, chatType } = userChatroom.chatroom;
        return { chatroomId, title, isPrivate, chatType };
      });
  }

  private async classifyOtherSections(userChatrooms: any[], userId: number) {
    const sections = await this.sectionRepository.createQueryBuilder('section').where('section.userId = :userId', { userId }).getMany();

    if (!sections) {
      return [];
    }

    const otherSections = sections.map((section) => {
      const { sectionId, sectionName } = section;
      const chatrooms = this.classifyChannelsBySectionName(userChatrooms, sectionName);
      return { sectionId, sectionName, chatrooms };
    });

    return otherSections;
  }

  private async classifyDirectMessages(userChatrooms: any[], userId: number) {
    const directMessages = await Promise.all(
      userChatrooms
        .filter((userChatroom) => userChatroom.sectionName === 'Direct Message')
        .map(async (userChatroom) => {
          const { chatroomId, title, chatType } = userChatroom.chatroom;
          const chatProfileImg = await this.findChatProfileImg(userChatroom, userId);
          return { chatroomId, title, chatType, chatProfileImg };
        })
    );
    return directMessages;
  }

  private async findChatProfileImg(userChatroom: any, userId: number) {
    const { chatroomId } = userChatroom.chatroom;

    const chatrooms = await this.userChatroomRepository
      .createQueryBuilder('userChatroom')
      .where('userChatroom.chatroom.chatroomId = :chatroomId', { chatroomId })
      .leftJoinAndSelect('userChatroom.user', 'user')
      .getMany();

    if (!chatrooms) {
      return String();
    }

    const [chatProfileImg] = chatrooms.filter((chatroom) => chatroom.user.userId !== userId).map((chatroom) => chatroom.user.profileUri);

    return chatProfileImg;
  }
}

export default UserChatroomService;
