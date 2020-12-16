import { getCustomRepository } from 'typeorm';
import { Transactional } from 'typeorm-transactional-cls-hooked';
import ChatroomRepository from '@repository/chatroom-repository';
import UserRepository from '@repository/user-repository';
import UserChatroomRepository from '@repository/user-chatroom-repository';
import validator from '@utils/validator';
import BadRequestError from '@error/bad-request-error';
import NotFoundError from '@error/not-found-error';
import ChatType from '@constants/chat-type';
import DefaultSectionName from '@constants/default-section-name';
import ConflictError from '@error/conflict-error';

class ChatroomService {
  static instance: ChatroomService;

  chatroomRepository: ChatroomRepository;

  userRepository: UserRepository;

  userChatroomRepository: UserChatroomRepository;

  constructor() {
    this.chatroomRepository = getCustomRepository(ChatroomRepository);
    this.userRepository = getCustomRepository(UserRepository);
    this.userChatroomRepository = getCustomRepository(UserChatroomRepository);
  }

  static getInstance(): ChatroomService {
    if (!ChatroomService.instance) {
      ChatroomService.instance = new ChatroomService();
    }
    return ChatroomService.instance;
  }

  @Transactional()
  async createChannel({ userId, title, description, isPrivate }) {
    const user = await this.userRepository.findOne(userId);
    const chatroom = await this.chatroomRepository.findByTitle(title);

    if (chatroom || !user) {
      throw new BadRequestError();
    }

    const newChatroom = await this.saveChatroom({ title, description, isPrivate, chatType: ChatType.Channel });
    await this.saveUserChatroom({ sectionName: DefaultSectionName.Channels, user, chatroom: newChatroom });
    return newChatroom.chatroomId;
  }

  @Transactional()
  async createDM(userId: number, invitedUserId: number) {
    const user = await this.userRepository.findOne(userId);
    const invitedUser = await this.userRepository.findOne(invitedUserId);

    if (!user || !invitedUser) {
      throw new BadRequestError();
    }

    await this.validateExistsDM(userId, invitedUserId);

    const newChatroom = await this.saveChatroom({ title: null, description: null, isPrivate: true, chatType: ChatType.DM });
    await this.saveUserChatroom({ sectionName: DefaultSectionName.DirectMessages, user, chatroom: newChatroom });
    await this.saveUserChatroom({ sectionName: DefaultSectionName.DirectMessages, user: invitedUser, chatroom: newChatroom });
    return newChatroom.chatroomId;
  }

  private async validateExistsDM(userId: number, invitedUserId: number) {
    const userChatrooms = await this.userChatroomRepository
      .createQueryBuilder('userChatroom')
      .leftJoinAndSelect('userChatroom.chatroom', 'chatroom')
      .where('userChatroom.user.userId = :userId', { userId })
      .andWhere('chatroom.chatType = :chatType', { chatType: ChatType.DM })
      .getMany();

    await Promise.all(
      userChatrooms.map(async (userChatroom) => {
        const { chatroomId } = userChatroom.chatroom;
        const otherUserChatroom = await this.userChatroomRepository
          .createQueryBuilder('userChatroom')
          .leftJoinAndSelect('userChatroom.chatroom', 'chatroom')
          .leftJoinAndSelect('userChatroom.user', 'user')
          .where('chatroom.chatroomId = :chatroomId', { chatroomId })
          .andWhere('userChatroom.user.userId != :userId', { userId })
          .andWhere('chatroom.chatType = :chatType', { chatType: ChatType.DM })
          .getOne();

        if (otherUserChatroom && otherUserChatroom.user.userId === invitedUserId) {
          throw new ConflictError();
        }
      })
    );
  }

  private async saveChatroom({ title, description, isPrivate, chatType }) {
    const chatroom = this.chatroomRepository.create({ title, description, isPrivate, chatType });

    if (chatType === ChatType.Channel) {
      await validator(chatroom);
    }

    const newChatroom = await this.chatroomRepository.save(chatroom);
    return newChatroom;
  }

  private async saveUserChatroom({ sectionName, user, chatroom }) {
    const userChatroom = this.userChatroomRepository.create({ sectionName, user, chatroom });
    await validator(userChatroom);
    const newUserChatroom = await this.userChatroomRepository.save(userChatroom);
    return newUserChatroom;
  }

  async getChatrooms(userId: Number, offsetTitle: String) {
    let where = 'chatroom.chatType = :chatType';
    if (offsetTitle !== 'undefined') where += ' AND chatroom.title > :offsetTitle';
    const chatrooms = await this.chatroomRepository
      .createQueryBuilder('chatroom')
      .where(where, { chatType: 'Channel', offsetTitle })
      .leftJoin('chatroom.userChatrooms', 'userChatrooms')
      .leftJoin('userChatrooms.user', 'user')
      .select(['chatroom.chatroomId', 'chatroom.title', 'chatroom.description', 'chatroom.isPrivate'])
      .addSelect(['userChatrooms.userChatroomId', 'userChatrooms.deletedAt'])
      .addSelect(['user.userId'])
      .orderBy('chatroom.title')
      .getMany();
    const { filterChatrooms, isJoinedArr } = this.getFilterPrivateChatrooms(chatrooms, userId);
    const customChatrooms = this.getCustomChatrooms(filterChatrooms, isJoinedArr);
    return customChatrooms.slice(0, 20);
  }

  private getFilterPrivateChatrooms(chatrooms: any, userId: Number) {
    let isJoinedArr = [];
    const filterChatrooms = chatrooms.filter((chatroom) => {
      let isJoined = false;
      chatroom.userChatrooms.forEach((userChatroom) => {
        if (userChatroom.user.userId === userId && userChatroom.deletedAt === null) isJoined = true;
      });
      if (isJoined || !chatroom.isPrivate) isJoinedArr.push(isJoined);
      return !chatroom.isPrivate || isJoined;
    });
    return { filterChatrooms, isJoinedArr };
  }

  private getCustomChatrooms(chatrooms: any, isJoinedArr: any) {
    return chatrooms.map((chatroom, idx) => {
      const { chatroomId, title, description, isPrivate, userChatrooms } = chatroom;
      const members = userChatrooms.length;
      const isJoined = isJoinedArr[idx];
      return { chatroomId, title, description, isPrivate, members, isJoined };
    });
  }

  @Transactional()
  async getChatroomInfo(chatroomId: number, userId: number) {
    const chatroom = await this.chatroomRepository
      .createQueryBuilder('chatroom')
      .where('chatroom.chatroomId = :chatroomId', { chatroomId })
      .select(['chatroom.title', 'chatroom.description', 'chatroom.isPrivate', 'chatroom.chatType', 'chatroom.topic'])
      .getOne();

    if (!chatroom) {
      throw new NotFoundError();
    }

    const userChatrooms = await this.userChatroomRepository
      .createQueryBuilder('userChatroom')
      .where('userChatroom.chatroomId = :chatroomId', { chatroomId })
      .leftJoinAndSelect('userChatroom.user', 'user')
      .select(['userChatroom', 'user.userId', 'user.profileUri', 'user.displayName'])
      .getMany();

    if (!userChatrooms) {
      throw new NotFoundError();
    }

    const users = userChatrooms.map((userChatroom) => userChatroom.user);

    const userCount = users.length;
    const { chatType } = chatroom;

    if (chatType === ChatType.DM) {
      const chatProfileImg = this.findProfileUri(users, userId);
      const title = this.findTitle(users, userId);
      const { description, isPrivate, topic } = chatroom;
      return { title, description, isPrivate, chatType, topic, chatProfileImg, userCount, users };
    }

    return { ...chatroom, userCount, users };
  }

  private findProfileUri(users: any[], userId: number) {
    const otherUser = users.find((user) => {
      return user.userId !== userId;
    });
    const clientUser = users.find((user) => {
      return user.userId === userId;
    });
    return otherUser ? otherUser.profileUri : clientUser.profileUri;
  }

  private findTitle(users: any[], userId: number) {
    if (users.every((user) => user.userId === userId)) {
      const { displayName } = users[0];
      return displayName;
    }

    const title = users
      .filter((user) => user.userId !== userId)
      .reduce((str, user) => {
        if (!str) return user.displayName;
        return `${str}, ${user.displayName}`;
      }, '');

    return title;
  }

  async updateChatroom(chatroomId: number, title: string, topic: string, description: string) {
    const chatroom = this.chatroomRepository.findOne({ chatroomId });

    if (!chatroom) {
      throw new NotFoundError();
    }

    const newChatroom = this.chatroomRepository.create({ chatroomId, title, topic, description });
    await this.chatroomRepository.save(newChatroom);
  }

  async deleteChatroom(chatroomId: number) {
    await this.chatroomRepository.softDelete(chatroomId);
  }

  async getChatroomCount(userId: number) {
    const chatrooms = await this.chatroomRepository
      .createQueryBuilder('chatroom')
      .where('chatroom.chatType = :chatType', { chatType: ChatType.Channel })
      .leftJoin('chatroom.userChatrooms', 'userChatrooms')
      .leftJoin('userChatrooms.user', 'user')
      .select(['chatroom.chatroomId', 'chatroom.title', 'chatroom.description', 'chatroom.isPrivate'])
      .addSelect(['userChatrooms.userChatroomId'])
      .addSelect(['user.userId'])
      .orderBy('chatroom.title')
      .getMany();

    const { filterChatrooms } = this.getFilterPrivateChatrooms(chatrooms, userId);
    return filterChatrooms.length;
  }
}

export default ChatroomService;
