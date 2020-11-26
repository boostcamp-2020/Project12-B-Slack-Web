import { getCustomRepository } from 'typeorm';
import ChatroomRepository from '@repository/chatroom-repository';
import { Transactional } from 'typeorm-transactional-cls-hooked';
import validator from '../common/utils/validator';
import BadRequestError from '../common/error/bad-request-error';
import UserRepository from '../repository/user-repository';
import UserChatroomRepository from '../repository/user-chatroom-repository';

interface createChatroomParams {
  userId: number;
  title: string;
  description: string;
  isPrivate: boolean;
  chatType: 'DM' | 'Channel';
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

    const newChatroom = this.chatroomRepository.create({ title, description, isPrivate, chatType });
    await validator(newChatroom);
    const createdChatroom = await this.chatroomRepository.save(newChatroom);

    const userChatroom = this.userChatroomRepository.create({ sectionName, user, chatroom: createdChatroom });
    await validator(userChatroom);
    await this.userChatroomRepository.save(userChatroom);
  }
}

export default ChatroomService;
