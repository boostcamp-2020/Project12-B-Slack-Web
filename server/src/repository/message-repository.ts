import { EntityRepository, Repository } from 'typeorm';
import Message from '@model/message';

@EntityRepository(Message)
export default class MessageRepository extends Repository<Message> {}
