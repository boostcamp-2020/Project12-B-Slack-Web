import { getCustomRepository } from 'typeorm';
import MessageRepository from '@repository/message-repository';
import UserRepository from '@repository/user-repository';
import ChatroomRepository from '@repository/chatroom-repository';

import BadRequestError from '@error/bad-request-error';
import validator from '../common/utils/validator';

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

    if (!user || !chatroom) {
      throw new BadRequestError();
    }

    const message = await this.MessageRepository.create({ user, chatroom, content });
    validator(message);
    const { messageId } = await this.MessageRepository.save(message);
    return messageId;
  }

  async getMessage(messageId: number) {
    const message = await this.MessageRepository.createQueryBuilder('message')
      .leftJoinAndSelect('message.user', 'user')
      .leftJoinAndSelect('message.chatroom', 'chatroom')
      .leftJoin('message.messageReactions', 'messageReactions')
      .leftJoin('messageReactions.reaction', 'reaction')
      .leftJoin('messageReactions.user', 'reactionUser')
      .select(['message', 'user.userId', 'user.profileUri', 'user.displayName', 'chatroom.chatroomId'])
      .addSelect(['messageReactions.messageReactionId'])
      .addSelect(['reaction.reactionId', 'reaction.title', 'reaction.emoji'])
      .addSelect(['reactionUser.displayName'])
      .where('message.messageId = :messageId', { messageId })
      .getOne();
    if (!message) throw new BadRequestError();
    this.customMessageReaction(message);
    return message;
  }

  private async customMessageReaction(message: any) {
    let messageReactions: any = {};
    message.messageReactions.forEach((messageReaction) => {
      const { reactionId, title, emoji } = messageReaction.reaction;
      const { displayName } = messageReaction.user;
      if (messageReactions[reactionId]) {
        messageReactions[reactionId].reactionDisplayNames.push(displayName);
        messageReactions[reactionId].reactionCount = messageReactions[reactionId].reactionDisplayNames.length;
      } else
        messageReactions[reactionId] = {
          reactionId,
          title,
          emoji,
          reactionCount: 1,
          reactionDisplayNames: [displayName]
        };
    });
    message.messageReactions = messageReactions;
  }

  async getMessages(chatroomId: number, offsetId: number) {
    const limit = 15;
    let where = 'message.chatroomId = :chatroomId';
    if (offsetId) where += ' AND message.messageId < :offsetId';
    const messages = await this.MessageRepository.createQueryBuilder('message')
      .leftJoin('message.user', 'user')
      .leftJoin('message.replies', 'replies')
      .leftJoin('replies.user', 'replyUser')
      .leftJoin('message.messageReactions', 'messageReactions')
      .leftJoin('messageReactions.reaction', 'reaction')
      .leftJoin('messageReactions.user', 'reactionUser')
      .select(['message.messageId', 'message.createdAt', 'message.updatedAt', 'message.content'])
      .addSelect(['user.userId', 'user.profileUri', 'user.displayName'])
      .addSelect(['messageReactions.messageReactionId'])
      .addSelect(['reaction.reactionId', 'reaction.title', 'reaction.emoji'])
      .addSelect(['reactionUser.displayName'])
      .addSelect(['replies.createdAt'])
      .addSelect(['replyUser.profileUri'])
      .orderBy('message.messageId', 'DESC')
      .limit(limit)
      .where(where, { chatroomId, offsetId })
      .getMany();

    this.customMessagesReaction(messages);
    this.customMessagesReplies(messages);

    return messages.reverse();
  }

  async updateMessage(messageId: number, content: string) {
    const message = await this.MessageRepository.create({ messageId, content });
    validator(message);
    const updatedMessage = await this.MessageRepository.save({ messageId, content });
    return updatedMessage;
  }

  async deleteMessage(messageId: number) {
    await this.MessageRepository.softDelete(messageId);
  }

  private async customMessagesReaction(messages: any) {
    messages.forEach((message: any) => {
      let messageReactions: any = {};
      message.messageReactions.forEach((messageReaction) => {
        const { reactionId, title, emoji } = messageReaction.reaction;
        const { displayName } = messageReaction.user;
        if (messageReactions[reactionId]) {
          messageReactions[reactionId].reactionDisplayNames.push(displayName);
          messageReactions[reactionId].reactionCount = messageReactions[reactionId].reactionDisplayNames.length;
        } else
          messageReactions[reactionId] = {
            reactionId,
            title,
            emoji,
            reactionCount: 1,
            reactionDisplayNames: [displayName]
          };
      });
      message.messageReactions = messageReactions;
    });
    return messages;
  }

  private async customMessagesReplies(messages: any) {
    const maxPrifileUriCount = 5;
    messages.forEach((message: any) => {
      let lastReplyAtNumber = 0;
      const replyCount = message.replies.length;
      const profileUris = [];
      message.replies.forEach((reply: any) => {
        lastReplyAtNumber = Math.max(reply.createdAt);
        if (profileUris.length < maxPrifileUriCount) profileUris.push(reply.user.profileUri);
      });
      const lastReplyAt = lastReplyAtNumber === 0 ? undefined : new Date(lastReplyAtNumber);
      delete message.replies;
      message.thread = {
        lastReplyAt,
        replyCount,
        profileUris
      };
    });

    return messages;
  }
}

export default MessageService;
