import { getCustomRepository } from 'typeorm';
import MessageRepository from '@repository/message-repository';
import UserRepository from '@repository/user-repository';
import ChatroomRepository from '@repository/chatroom-repository';

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
    const message = await this.MessageRepository.create({ user, chatroom, content });
    validator(message);
    await this.MessageRepository.save(message);
  }

  async getMessage(messageId: number) {
    const message = await this.MessageRepository.createQueryBuilder('message')
      .leftJoinAndSelect('message.user', 'user')
      .select(['message', 'user.userId', 'user.profileUri', 'user.displayName'])
      .where('message.messageId = :messageId', { messageId })
      .getOne();
    return message;
  }

  async getMessages(chatroomId: number, offsetId: number) {
    const messages = await this.MessageRepository.createQueryBuilder('message')
      .leftJoin('message.user', 'user')
      .leftJoin('message.replies', 'replies')
      .leftJoin('replies.user', 'replyUser')
      .leftJoin('message.messageReactions', 'messageReactions')
      .leftJoin('messageReactions.reaction', 'reaction')
      .leftJoin('messageReactions.user', 'reactionUser')
      .select(['message.messageId', 'message.createdAt', 'message.updatedAt'])
      .addSelect(['user.userId', 'user.profileUri', 'user.displayName'])
      .addSelect(['messageReactions.messageReactionId'])
      .addSelect(['reaction.reactionId', 'reaction.title', 'reaction.imageUri'])
      .addSelect(['reactionUser.displayName'])
      .addSelect(['replies.createdAt'])
      .addSelect(['replyUser.profileUri'])
      .orderBy('message.messageId', 'DESC')
      .limit(10)
      .where('message.chatroomId = :chatroomId AND message.messageId < :offsetId', { chatroomId, offsetId })
      .getMany();

    this.customMessagesReaction(messages);
    this.customMessagesReplies(messages);

    return messages;
  }

  async updateMessage(messageId: number, content: string) {
    const message = await this.MessageRepository.create({ messageId, content });
    validator(message);
    await this.MessageRepository.save({ messageId, content });
    return message;
  }

  async deleteMessage(messageId: number) {
    await this.MessageRepository.softDelete(messageId);
  }

  private async customMessagesReaction(messages: any) {
    messages.forEach((message: any) => {
      let messageReactions: any = {};
      message.messageReactions.forEach((messageReaction) => {
        const { reactionId, title, imageUri } = messageReaction.reaction;
        const { displayName } = messageReaction.user;
        if (messageReactions[reactionId]) messageReactions[reactionId].replyDisplayNames.push(displayName);
        else
          messageReactions[reactionId] = {
            reactionId,
            title,
            imageUri,
            replyDisplayNames: [displayName]
          };
      });
      message.messageReactions = messageReactions;
    });
    return messages;
  }

  private async customMessagesReplies(messages: any) {
    messages.forEach((message: any) => {
      let lastReplyAtNumber = 0;
      const replyCount = message.replies.length;
      const profileUris = [];
      message.replies.forEach((reply: any) => {
        lastReplyAtNumber = Math.max(reply.createdAt);
        if (profileUris.length < 5) profileUris.push(reply.user.profileUri);
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
