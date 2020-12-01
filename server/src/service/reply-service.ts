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

  async getReply(replyId: number) {
    const reply = await this.replyRepository
      .createQueryBuilder('reply')
      .leftJoinAndSelect('reply.user', 'writer')
      .leftJoinAndSelect('reply.replyReactions', 'replyReactions')
      .leftJoinAndSelect('replyReactions.user', 'user')
      .leftJoinAndSelect('replyReactions.reaction', 'reaction')
      .where('reply.replyId = :replyId', { replyId })
      .select(['reply.replyId', 'reply.content', 'reply.createdAt', 'reply.updatedAt'])
      .addSelect(['writer.userId', 'writer.profileUri', 'writer.displayName'])
      .addSelect(['replyReactions', 'user', 'reaction'])
      .getOne();

    if (!reply) {
      throw new NotFoundError();
    }

    const { replyReactions } = { ...reply };

    return { ...reply, replyReactions: this.formattingReplyReactions(replyReactions) };
  }

  async getRepliesByOffsetId(offsetId: number) {
    const replies = await this.replyRepository
      .createQueryBuilder('reply')
      .leftJoinAndSelect('reply.user', 'writer')
      .leftJoinAndSelect('reply.replyReactions', 'replyReactions')
      .leftJoinAndSelect('replyReactions.user', 'user')
      .leftJoinAndSelect('replyReactions.reaction', 'reaction')
      .select(['reply.replyId', 'reply.content', 'reply.createdAt', 'reply.updatedAt'])
      .addSelect(['writer.userId', 'writer.profileUri', 'writer.displayName'])
      .addSelect(['replyReactions', 'user', 'reaction'])
      .where('reply.replyId < :offsetId', { offsetId })
      .orderBy('reply.replyId', 'DESC')
      .take(10)
      .getMany();

    const formattedReplies = replies.map((reply) => {
      const { replyReactions } = { ...reply };
      return { ...reply, replyReactions: this.formattingReplyReactions(replyReactions) };
    });

    return formattedReplies;
  }

  async getRecentReplies() {
    const replies = await this.replyRepository
      .createQueryBuilder('reply')
      .leftJoinAndSelect('reply.user', 'writer')
      .leftJoinAndSelect('reply.replyReactions', 'replyReactions')
      .leftJoinAndSelect('replyReactions.user', 'user')
      .leftJoinAndSelect('replyReactions.reaction', 'reaction')
      .select(['reply.replyId', 'reply.content', 'reply.createdAt', 'reply.updatedAt'])
      .addSelect(['writer.userId', 'writer.profileUri', 'writer.displayName'])
      .addSelect(['replyReactions', 'user', 'reaction'])
      .orderBy('reply.replyId', 'DESC')
      .take(10)
      .getMany();

    const formattedReplies = replies.map((reply) => {
      const { replyReactions } = { ...reply };
      return { ...reply, replyReactions: this.formattingReplyReactions(replyReactions) };
    });

    return formattedReplies;
  }

  private formattingReplyReactions(replyReactions: any[]) {
    const reactions = {};

    replyReactions.forEach((replyReaction) => {
      const reactionId = Number(replyReaction.reaction.reactionId);
      if (!reactions[reactionId]) {
        const { title, imageUri } = replyReaction.reaction;
        reactions[reactionId] = { reactionId, title, imageUri, replyDisplayNames: [] };
      }
      const { displayName } = replyReaction.user;
      reactions[reactionId].replyDisplayNames.push(displayName);
    });

    return Object.values(reactions);
  }
}

export default ReplyService;
