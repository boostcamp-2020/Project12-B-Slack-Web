import { getCustomRepository } from 'typeorm';
import ReactionRepository from '@repository/reacion-repository';
import validator from '@utils/validator';
import BadRequestError from '@error/bad-request-error';

class ReactionService {
  static instance: ReactionService;

  reactionRepository: ReactionRepository;

  constructor() {
    this.reactionRepository = getCustomRepository(ReactionRepository);
  }

  static getInstance(): ReactionService {
    if (!ReactionService.instance) {
      ReactionService.instance = new ReactionService();
    }
    return ReactionService.instance;
  }

  async createReaction(title: string, imageUri: string) {
    const reaction = await this.reactionRepository.findOne({ title });
    if (reaction) {
      throw new BadRequestError();
    }

    const newReaction = this.reactionRepository.create({ title, imageUri });
    await validator(newReaction);
    const createdReaction = await this.reactionRepository.save(newReaction);
    return createdReaction.reactionId;
  }

  async getReactions() {
    const reactions = await this.reactionRepository
      .createQueryBuilder('reaction')
      .select(['reaction.reactionId', 'reaction.title', 'reaction.imageUri'])
      .getMany();

    return reactions;
  }
}

export default ReactionService;
