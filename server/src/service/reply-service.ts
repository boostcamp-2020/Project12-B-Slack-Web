import { getCustomRepository } from 'typeorm';
import ReplyRepository from '@repository/reply-repository';
import UserRepository from '@repository/user-repository';
import MessageRepository from '@repository/message-repository';
import validator from '@utils/validator';
import NotFoundError from '@error/not-found-error';

class ReplyService {
  static instance: ReplyService;

  replyRepository: ReplyRepository;

  userRepository: UserRepository;

  messageRepository: MessageRepository;

  constructor() {
    this.replyRepository = getCustomRepository(ReplyRepository);
    this.userRepository = getCustomRepository(UserRepository);
    this.messageRepository = getCustomRepository(MessageRepository);
  }

  static getInstance(): ReplyService {
    if (!ReplyService.instance) {
      ReplyService.instance = new ReplyService();
    }
    return ReplyService.instance;
  }

  async createReply(userId: number, messageId: number, content: string) {
    const user = await this.userRepository.findOne(userId);
    const message = await this.messageRepository.findOne(messageId);

    if (!user || !message) {
      throw new NotFoundError();
    }

    const reply = this.replyRepository.create({ user, message, content });
    await validator(reply);
    await this.replyRepository.save(reply);
  }
}

export default ReplyService;
