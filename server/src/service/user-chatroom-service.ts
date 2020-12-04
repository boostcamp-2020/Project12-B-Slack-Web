import { getCustomRepository } from 'typeorm';
import UserChatroomRepository from '@repository/user-chatroom-repository';
import SectionRepository from '@repository/section-repository';
import { Transactional } from 'typeorm-transactional-cls-hooked';
import NotFoundError from '@error/not-found-error';
import UserRepository from '@repository/user-repository';
import ChatroomRepository from '@repository/chatroom-repository';
import BadRequestError from '@error/bad-request-error';
import validator from '@utils/validator';
import ChatType from '@constants/chat-type';
import DefaultSectionName from '@constants/default-section-name';

class UserChatroomService {
  static instance: UserChatroomService;

  userRepository: UserRepository;

  chatroomRepository: ChatroomRepository;

  sectionRepository: SectionRepository;

  userChatroomRepository: UserChatroomRepository;

  constructor() {
    this.userRepository = getCustomRepository(UserRepository);
    this.chatroomRepository = getCustomRepository(ChatroomRepository);
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

    const starred = this.classifyChannelsBySectionName(userChatrooms, DefaultSectionName.Starred);
    const otherSections = await this.classifyOtherSections(userChatrooms, userId);
    const channels = this.classifyChannelsBySectionName(userChatrooms, DefaultSectionName.Channels);
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
        .filter((userChatroom) => userChatroom.sectionName === DefaultSectionName.DirectMessages)
        .map(async (userChatroom) => {
          const { chatroomId, chatType } = userChatroom.chatroom;
          const { title, chatProfileImg } = await this.findTitleAndImg(userChatroom, userId);
          return { chatroomId, title, chatType, chatProfileImg };
        })
    );
    return directMessages;
  }

  private async findTitleAndImg(userChatroom: any, userId: number): Promise<{ title: string; chatProfileImg: string }> {
    const { chatroomId } = userChatroom.chatroom;

    const chatrooms = await this.userChatroomRepository
      .createQueryBuilder('userChatroom')
      .where('userChatroom.chatroom.chatroomId = :chatroomId', { chatroomId })
      .leftJoinAndSelect('userChatroom.user', 'user')
      .getMany();

    if (!chatrooms) {
      return undefined;
    }

    const users = chatrooms.map((chatroom) => chatroom.user);

    if (users.every((user) => user.userId === userId)) {
      const { displayName, profileUri } = users[0];
      return { title: displayName, chatProfileImg: profileUri };
    }

    const title = users
      .filter((user) => user.userId !== userId)
      .reduce((str, user) => {
        if (!str) return user.displayName;
        return `${str}, ${user.displayName}`;
      }, '');

    const [chatProfileImg] = users.filter((user) => user.userId !== userId).map((user) => user.profileUri);

    return { title, chatProfileImg };
  }

  @Transactional()
  async joinChatroom(userId: number, chatroomId: number) {
    const user = await this.userRepository.findOne({ userId });
    const chatroom = await this.chatroomRepository.findOne({ chatroomId });

    if (!user || !chatroom) {
      throw new BadRequestError();
    }

    if (await this.isAlreadyJoinedChatroom(userId, chatroomId)) {
      throw new BadRequestError();
    }

    await this.saveUserChatroom(user, chatroom);
  }

  @Transactional()
  async inviteChatroom(users: number[], chatroomId: number) {
    const chatroom = await this.chatroomRepository.findOne({ chatroomId });

    if (!chatroom) {
      throw new BadRequestError();
    }

    await Promise.all(
      users.map(async (userId) => {
        const user = await this.userRepository.findOne({ userId });

        if (!user) {
          throw new BadRequestError();
        }

        if (await this.isAlreadyJoinedChatroom(userId, chatroomId)) {
          throw new BadRequestError();
        }

        await this.saveUserChatroom(user, chatroom);
      })
    );
  }

  private async isAlreadyJoinedChatroom(userId: number, chatroomId: number) {
    const userChatroom = await this.userChatroomRepository
      .createQueryBuilder('userChatroom')
      .where('userChatroom.user.userId = :userId', { userId })
      .andWhere('userChatroom.chatroom.chatroomId = :chatroomId', { chatroomId })
      .getOne();

    return !!userChatroom;
  }

  private async saveUserChatroom(user, chatroom) {
    const sectionName = chatroom.chatType === ChatType.DM ? DefaultSectionName.DirectMessages : DefaultSectionName.Channels;
    const newUserChatroom = this.userChatroomRepository.create({ user, chatroom, sectionName });
    await validator(newUserChatroom);
    await this.userChatroomRepository.save(newUserChatroom);
  }
}

export default UserChatroomService;
