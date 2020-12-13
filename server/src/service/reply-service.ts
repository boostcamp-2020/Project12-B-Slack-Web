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
    const newReply = await this.replyRepository.save(reply);
    return newReply.replyId;
  }

  async getReplyInfo(replyId: number) {
    const reply = await this.replyRepository
      .createQueryBuilder('reply')
      .leftJoinAndSelect('reply.message', 'message')
      .leftJoinAndSelect('message.chatroom', 'chatroom')
      .where('reply.replyId = :replyId', { replyId })
      .select(['reply.replyId'])
      .addSelect(['chatroom.chatroomId'])
      .addSelect(['message.messageId'])
      .getOne();
    return reply;
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

  async getReplies(messageId: number, offsetId: number) {
    let where = 'reply.messageId = :messageId';
    where += offsetId ? ' AND reply.replyId < :offsetId' : '';
    const replies = await this.replyRepository
      .createQueryBuilder('reply')
      .leftJoinAndSelect('reply.user', 'writer')
      .leftJoinAndSelect('reply.replyReactions', 'replyReactions')
      .leftJoinAndSelect('replyReactions.user', 'user')
      .leftJoinAndSelect('replyReactions.reaction', 'reaction')
      .select(['reply.replyId', 'reply.content', 'reply.createdAt', 'reply.updatedAt'])
      .addSelect(['writer.userId', 'writer.profileUri', 'writer.displayName'])
      .addSelect(['replyReactions', 'user', 'reaction'])
      .where(where, { messageId, offsetId })
      .orderBy('reply.replyId', 'DESC')
      .take(10)
      .getMany();
    const formattedReplies = replies.map((reply) => {
      const { replyReactions } = { ...reply };
      return { ...reply, replyReactions: this.formattingReplyReactions(replyReactions) };
    });

    return formattedReplies.reverse();
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

  async updateReply(replyId: number, content: string) {
    const reply = await this.replyRepository.create({ replyId, content });
    await validator(reply);
    const updatedReply = await this.replyRepository.save(reply);
    return updatedReply;
  }

  async deleteReply(replyId: number) {
    await this.replyRepository.softDelete(replyId);
  }
}

export default ReplyService;
