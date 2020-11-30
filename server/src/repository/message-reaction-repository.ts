import { EntityRepository, Repository } from 'typeorm';
import MessageReaction from '@model/message-reaction';

@EntityRepository(MessageReaction)
export default class MessageReactionRepository extends Repository<MessageReaction> {}
