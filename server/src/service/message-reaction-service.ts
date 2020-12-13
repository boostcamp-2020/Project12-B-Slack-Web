import { getCustomRepository } from 'typeorm';
import MessageReactionRepository from '@repository/message-reaction-repository';
import UserRepository from '@repository/user-repository';
import MessageRepository from '@repository/message-repository';
import ReactionRepository from '@repository/reacion-repository';
import BadRequestError from '@error/bad-request-error';
import ConflictError from '@error/conflict-error';
import NotFoundError from '@error/not-found-error';
import { validate } from 'class-validator';

class MessageReactionService {
  static instance: MessageReactionService;

  messageReactionRepository: MessageReactionRepository;

  userRepository: UserRepository;

  messageRepository: MessageRepository;

  reactionRepository: ReactionRepository;

  constructor() {
    this.messageReactionRepository = getCustomRepository(MessageReactionRepository);
    this.userRepository = getCustomRepository(UserRepository);
    this.messageRepository = getCustomRepository(MessageRepository);
    this.reactionRepository = getCustomRepository(ReactionRepository);
  }

  static getInstance(): MessageReactionService {
    if (!MessageReactionService.instance) {
      MessageReactionService.instance = new MessageReactionService();
    }
    return MessageReactionService.instance;
  }

  async createMessageReaction(userId: number, messageId: number, title: string, emoji: string) {
    const user = await this.userRepository.findOne({ userId });
    const message = await this.messageRepository.findOne({ messageId });
    let reaction = await this.reactionRepository.findOne({ emoji });

    if (!title || !emoji) {
      throw new BadRequestError();
    }
    if (!reaction) {
      const newReaction = this.reactionRepository.create({ title, emoji });
      await validate(newReaction);
      reaction = await this.reactionRepository.save(newReaction);
    }
    if (!user || !message || !reaction) {
      throw new BadRequestError();
    }

    const newMessageReaction = this.messageReactionRepository.create({ user, message, reaction });
    const messageReaction = await this.messageReactionRepository.findOne(newMessageReaction);

    if (messageReaction) {
      throw new ConflictError();
    }

    const createdMessageReaction = await this.messageReactionRepository.save(newMessageReaction);
    return createdMessageReaction.messageReactionId;
  }

  async deleteMessageReaction(userId: number, messageId: number, reactionId: number) {
    const messageReaction = await this.messageReactionRepository
      .createQueryBuilder('messageReaction')
      .where('messageReaction.userId = :userId', { userId })
      .andWhere('messageReaction.messageId = :messageId', { messageId })
      .andWhere('messageReaction.reactionId = :reactionId', { reactionId })
      .getOne();

    if (!messageReaction) {
      throw new NotFoundError();
    }

    await this.messageReactionRepository.softDelete(messageReaction.messageReactionId);
  }
}

export default MessageReactionService;
