import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import ChatType from '@constants/chat-type';
import Chatroom from '@model/chatroom';

export default class CreateChatrooms implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const chatroomData = [
      {
        title: 'random',
        isPrivate: false,
        chatType: ChatType.Channel
      }
    ];
    const res = await connection.getRepository(Chatroom).findOne(chatroomData[0]);
    if (!res) await connection.getRepository(Chatroom).save(chatroomData);
  }
}
