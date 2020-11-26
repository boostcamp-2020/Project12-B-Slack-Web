import { getCustomRepository } from 'typeorm';
import ChatroomRepository from '@repository/chatroom-repository';
import { Transactional } from 'typeorm-transactional-cls-hooked';
import User from '@model/user';
import Chatroom from '@model/chatroom';
import validator from '../common/utils/validator';
import BadRequestError from '../common/error/bad-request-error';
import UserRepository from '../repository/user-repository';
import UserChatroomRepository from '../repository/user-chatroom-repository';

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
}

export default ChatroomService;
