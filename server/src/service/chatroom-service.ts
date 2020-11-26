import { getCustomRepository } from 'typeorm';
import ChatroomRepository from '@repository/chatroom-repository';
import { Transactional } from 'typeorm-transactional-cls-hooked';
import validator from '../common/utils/validator';
import BadRequestError from '../common/error/bad-request-error';

interface createChatroomParams {
  title: string;
  description: string;
  isPrivate: boolean;
  chatType: 'DM' | 'Channel';
}

class ChatroomService {
  static instance: ChatroomService;

  chatroomRepository: ChatroomRepository;

  constructor() {
    this.chatroomRepository = getCustomRepository(ChatroomRepository);
  }

  static getInstance(): ChatroomService {
    if (!ChatroomService.instance) {
      ChatroomService.instance = new ChatroomService();
    }
    return ChatroomService.instance;
  }

  @Transactional()
  async createChatroom({ title, description, isPrivate, chatType }: createChatroomParams) {
    const chatroom = await this.chatroomRepository.findByTitle(title);

    if (chatroom) {
      throw new BadRequestError();
    }

    const newChatroom = await this.chatroomRepository.create({ title, description, isPrivate, chatType });

    await validator(newChatroom);

    const createdChatroom = await this.chatroomRepository.save(newChatroom);
    return createdChatroom;
  }
}

export default ChatroomService;
