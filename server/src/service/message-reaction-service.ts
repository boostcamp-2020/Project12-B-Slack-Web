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
    const customMessageReaction = this.customMessageReaction(createdMessageReaction);
    const authors = await this.addAuthorMessageReaction(customMessageReaction);
    return { ...customMessageReaction, authors };
  }

  customMessageReaction(messageReaction) {
    const { reactionId, title, emoji } = messageReaction.reaction;
    const { messageId } = messageReaction.message;
    return { reactionId, title, emoji, messageId };
  }

  async addAuthorMessageReaction(messageReaction) {
    const { reactionId } = messageReaction;
    const AuthorMessageReaction = await this.messageReactionRepository
      .createQueryBuilder('messageReaction')
      .leftJoin('messageReaction.user', 'user')
      .select('messageReaction')
      .addSelect('user')
      .where('messageReaction.reactionId = :reactionId', { reactionId })
      .getMany();
    const author = AuthorMessageReaction.map((MessageReaction) => {
      const { displayName, userId } = MessageReaction.user;
      return { displayName, userId };
    });

    return author;
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

  async getMessageReaction(messageId: number, reactionId: number) {
    const messageReactions = await this.messageReactionRepository
      .createQueryBuilder('messageReaction')
      .leftJoin('messageReaction.user', 'user')
      .select('messageReaction')
      .addSelect('user')
      .where('messageReaction.messageId = :messageId', { messageId })
      .andWhere('messageReaction.reactionId = :reactionId', { reactionId })
      .getMany();
    const authors = messageReactions.map((messageReaction) => {
      const { userId, displayName } = messageReaction.user;
      return { userId, displayName };
    });
    const { title, emoji } = await this.reactionRepository.findOne({ reactionId });
    return { reactionId, title, emoji, messageId, authors };
  }
}

export default MessageReactionService;
