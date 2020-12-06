import { getCustomRepository } from 'typeorm';
import { Transactional } from 'typeorm-transactional-cls-hooked';
import ChatroomRepository from '@repository/chatroom-repository';
import UserRepository from '@repository/user-repository';
import UserChatroomRepository from '@repository/user-chatroom-repository';
import User from '@model/user';
import Chatroom from '@model/chatroom';
import validator from '@utils/validator';
import BadRequestError from '@error/bad-request-error';
import NotFoundError from '@error/not-found-error';

interface saveChatroomParams {
  title: string;
  description: string;
  isPrivate: boolean;
  chatType: 'DM' | 'Channel';
}

interface createChatroomParams extends saveChatroomParams {
  userId: number;
}

interface saveUserChatroomParams {
  sectionName: string;
  user: User;
  chatroom: Chatroom;
}

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
  async createChatroom({ userId, title, description, isPrivate, chatType }: createChatroomParams) {
    const user = await this.userRepository.findOne(userId);
    const chatroom = await this.chatroomRepository.findByTitle(title);
    const sectionName = chatType === 'DM' ? 'Direct Message' : 'Channels';

    if (chatroom || !user) {
      throw new BadRequestError();
    }

    const newChatroom = await this.saveChatroom({ title, description, isPrivate, chatType });
    await this.saveUserChatroom({ sectionName, user, chatroom: newChatroom });
  }

  private async saveChatroom({ title, description, isPrivate, chatType }: saveChatroomParams) {
    const chatroom = this.chatroomRepository.create({ title, description, isPrivate, chatType });
    await validator(chatroom);
    const newChatroom = await this.chatroomRepository.save(chatroom);
    return newChatroom;
  }

  private async saveUserChatroom({ sectionName, user, chatroom }: saveUserChatroomParams) {
    const userChatroom = this.userChatroomRepository.create({ sectionName, user, chatroom });
    await validator(userChatroom);
    const newUserChatroom = await this.userChatroomRepository.save(userChatroom);
    return newUserChatroom;
  }

  async getChatrooms(userId: Number) {
    const chatrooms = await this.chatroomRepository
      .createQueryBuilder('chatroom')
      .where('chatroom.chatType = :chatType', { chatType: 'Channel' })
      .leftJoin('chatroom.userChatrooms', 'userChatrooms')
      .leftJoin('userChatrooms.user', 'user')
      .select(['chatroom.chatroomId', 'chatroom.title', 'chatroom.description', 'chatroom.isPrivate'])
      .addSelect(['userChatrooms.userChatroomId'])
      .addSelect(['user.userId'])
      .orderBy('chatroom.title')
      .getMany();
    const filterChatrooms = this.getFilterPrivateChatrooms(chatrooms, userId);
    const customChatrooms = this.getCustomChatrooms(filterChatrooms);
    return customChatrooms;
  }

  getFilterPrivateChatrooms(chatrooms: any, userId: Number) {
    return chatrooms.filter((chatroom) => {
      let isJoin;
      if (chatroom.isPrivate)
        chatroom.userChatrooms.forEach((userChatroom) => {
          if (userChatroom.user.userId === userId) isJoin = true;
        });
      return !chatroom.isPrivate || isJoin;
    });
  }

  getCustomChatrooms(chatrooms: any) {
    return chatrooms.map((chatroom) => {
      const { chatroomId, title, description, isPrivate, userChatrooms } = chatroom;
      const members = userChatrooms.length;
      return { chatroomId, title, description, isPrivate, members };
    });
  }

  @Transactional()
  async getChatroomInfo(chatroomId: number) {
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
      .getMany();

    if (!userChatrooms) {
      throw new NotFoundError();
    }

    const users = userChatrooms.map((userChatroom) => {
      const { userId, profileUri, displayName } = userChatroom.user;
      return { userId, profileUri, displayName };
    });

    const userCount = users.length;

    return { ...chatroom, userCount, users };
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
}

export default ChatroomService;
