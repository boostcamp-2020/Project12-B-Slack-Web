import { getCustomRepository } from 'typeorm';
import MessageRepository from '@repository/message-repository';
import UserRepository from '@repository/user-repository';
import ChatroomRepository from '@repository/chatroom-repository';

class MessageService {
  static instance: MessageService;

  MessageRepository: MessageRepository;

  UserRepository: UserRepository;

  ChatroomRepository: ChatroomRepository;

  constructor() {
    this.MessageRepository = getCustomRepository(MessageRepository);
    this.UserRepository = getCustomRepository(UserRepository);
    this.ChatroomRepository = getCustomRepository(ChatroomRepository);
  }

  static getInstance(): MessageService {
    if (!MessageService.instance) {
      MessageService.instance = new MessageService();
    }
    return MessageService.instance;
  }

  async createMessage(userId: number, chatroomId: number, content: string) {
    const user = await this.UserRepository.findOne(userId);
    const chatroom = await this.ChatroomRepository.findOne(chatroomId);
    await this.MessageRepository.create({ user, chatroom, content });
  }

  async getMessage(messageId: number) {
    const message = await this.MessageRepository.createQueryBuilder('message')
      .leftJoinAndSelect('message.user', 'user')
      .select(['message', 'user.userId', 'user.profileUri', 'user.displayName'])
      .where('message.messageId = :messageId', { messageId })
      .getOne();
    return message;
  }

  async updateMessage(messageId: number, content: string) {
    const message = await this.MessageRepository.save({ messageId, content });
    return message;
  }

  async deleteMessage(messageId: number) {
    await this.MessageRepository.softDelete(messageId);
  }
}

export default MessageService;
