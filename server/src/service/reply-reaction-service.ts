import { getCustomRepository } from 'typeorm';
import ReplyReactionRepository from '@repository/reply-reaction-repository';
import UserRepository from '@repository/user-repository';
import ReplyRepository from '@repository/reply-repository';
import ReactionRepository from '@repository/reacion-repository';
import BadRequestError from '@error/bad-request-error';
import ConflictError from '@error/conflict-error';
import { validate } from 'class-validator';
import NotFoundError from '@error/not-found-error';

class ReplyReactionService {
  static instance: ReplyReactionService;

  replyReactionRepository: ReplyReactionRepository;

  userRepository: UserRepository;

  replyRepository: ReplyRepository;

  reactionRepository: ReactionRepository;

  constructor() {
    this.replyReactionRepository = getCustomRepository(ReplyReactionRepository);
    this.userRepository = getCustomRepository(UserRepository);
    this.reactionRepository = getCustomRepository(ReactionRepository);
    this.replyRepository = getCustomRepository(ReplyRepository);
  }

  static getInstance(): ReplyReactionService {
    if (!ReplyReactionService.instance) {
      ReplyReactionService.instance = new ReplyReactionService();
    }
    return ReplyReactionService.instance;
  }

  async createReplyReaction(userId: number, replyId: number, title: string, emoji: string) {
    const user = await this.userRepository.findOne({ userId });
    const reply = await this.replyRepository.findOne({ replyId });
    let reaction = await this.reactionRepository.findOne({ emoji });

    if (!title || !emoji) {
      throw new BadRequestError();
    }
    if (!reaction) {
      const newReaction = this.reactionRepository.create({ title, emoji });
      await validate(newReaction);
      reaction = await this.reactionRepository.save(newReaction);
    }
    if (!user || !reply || !reaction) {
      throw new BadRequestError();
    }

    const newReplyReaction = this.replyReactionRepository.create({ user, reply, reaction });
    const replyReaction = await this.replyReactionRepository.findOne(newReplyReaction);

    if (replyReaction) {
      throw new ConflictError();
    }

    const createdReplyReaction = await this.replyReactionRepository.save(newReplyReaction);
    const customReplyReaction = this.customReplyReaction(createdReplyReaction);
    const authors = await this.addAuthorReplyReaction(customReplyReaction);
    return { ...customReplyReaction, authors };
  }

  customReplyReaction(replyReaction) {
    const { reactionId, title, emoji } = replyReaction.reaction;
    const { replyId } = replyReaction.reply;
    return { reactionId, title, emoji, replyId };
  }

  async addAuthorReplyReaction(replyReaction) {
    const { reactionId } = replyReaction;
    const authorReplyReactions = await this.replyReactionRepository
      .createQueryBuilder('replyReaction')
      .leftJoin('replyReaction.user', 'user')
      .select('replyReaction')
      .addSelect('user')
      .where('replyReaction.reactionId = :reactionId', { reactionId })
      .getMany();
    const author = authorReplyReactions.map((authorReplyReaction) => {
      const { displayName, userId } = authorReplyReaction.user;
      return { displayName, userId };
    });

    return author;
  }

  async deleteReplyReaction(userId: number, replyId: number, reactionId: number) {
    const replyReaction = await this.replyReactionRepository
      .createQueryBuilder('replyReaction')
      .where('replyReaction.userId = :userId', { userId })
      .andWhere('replyReaction.replyId = :replyId', { replyId })
      .andWhere('replyReaction.reactionId = :reactionId', { reactionId })
      .getOne();

    if (!replyReaction) {
      throw new NotFoundError();
    }

    await this.replyReactionRepository.delete(replyReaction.replyReactionId);
  }

  async getReplyReaction(replyId: number, reactionId: number) {
    const replyReactions = await this.replyReactionRepository
      .createQueryBuilder('replyReaction')
      .leftJoin('replyReaction.user', 'user')
      .select('replyReaction')
      .addSelect('user')
      .where('replyReaction.replyId = :replyId', { replyId })
      .andWhere('replyReaction.reactionId = :reactionId', { reactionId })
      .getMany();
    const authors = replyReactions.map((replyReaction) => {
      const { userId, displayName } = replyReaction.user;
      return { userId, displayName };
    });
    const { title, emoji } = await this.reactionRepository.findOne({ reactionId });
    return { reactionId, title, emoji, replyId, authors };
  }
}

export default ReplyReactionService;
