import { EntityRepository, Repository } from 'typeorm';
import Chatroom from '@model/chatroom';

@EntityRepository(Chatroom)
export default class ChatroomRepository extends Repository<Chatroom> {
  findByTitle(title: string) {
    return this.findOne({ title });
  }
}
