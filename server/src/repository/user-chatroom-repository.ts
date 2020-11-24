import { EntityRepository, Repository } from 'typeorm';
import UserChatroom from '@model/user-chatroom';

@EntityRepository(UserChatroom)
export default class UserChatroomRepository extends Repository<UserChatroom> {}
