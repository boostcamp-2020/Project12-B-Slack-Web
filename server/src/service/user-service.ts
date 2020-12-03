import { getCustomRepository } from 'typeorm';
import UserRepository from '@repository/user-repository';
import ChatroomRepository from '@repository/chatroom-repository';
import UserChatroomRepository from '@repository/user-chatroom-repository';
import NotFoundError from '@error/not-found-error';
import Chatroom from '@model/chatroom';
import User from '@model/user';

class UserService {
  static instance: UserService;

  userRepository: UserRepository;

  chatroomRepository: ChatroomRepository;

  userChatroomRepository: UserChatroomRepository;

  constructor() {
    this.userRepository = getCustomRepository(UserRepository);
    this.chatroomRepository = getCustomRepository(ChatroomRepository);
    this.userChatroomRepository = getCustomRepository(UserChatroomRepository);
  }

  static getInstance(): UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }
    return UserService.instance;
  }

  async getUsers() {
    const usersAndCount = await this.userRepository.findAndCount();

    if (!usersAndCount) {
      throw new NotFoundError();
    }

    const userCount = usersAndCount[1];

    const users = usersAndCount[0].map((user) => {
      const { userId, displayName, profileUri } = user;
      return { userId, displayName, profileUri };
    });

    return { userCount, users };
  }

  async getUser(userId: number) {
    const user = await this.userRepository.findOne(userId);

    if (!user) {
      throw new NotFoundError();
    }

    const { id, profileUri, fullName, displayName, whatIDo, phoneNumber } = user;
    return { userId, id, profileUri, fullName, displayName, whatIDo, phoneNumber };
  }

  async getUserById(id: string) {
    const user = await this.userRepository.findOne({ id });

    if (!user) {
      throw new NotFoundError();
    }

    const { userId, profileUri, fullName, displayName, whatIDo, phoneNumber } = user;
    return { userId, id, profileUri, fullName, displayName, whatIDo, phoneNumber };
  }

  async createUser(id: string) {
    const newUser = await this.userRepository.save({ id, fullName: id, displayName: id, isSocial: true });
    const newDm = await this.createDm();
    await this.joinDm(newUser, newDm);
    await this.joinDefaultChannel(newUser);
  }

  private async createDm() {
    const newDm = await this.chatroomRepository.save({ isPrivate: true, chatType: 'DM' });
    return newDm;
  }

  private async joinDm(user: User, chatroom: Chatroom) {
    await this.userChatroomRepository.save({ user, chatroom, sectionName: 'DM' });
  }

  private async joinDefaultChannel(user: User) {
    const title = 'random';
    const chatroom = await this.chatroomRepository.findOne({ title });
    await this.userChatroomRepository.save({ user, chatroom, sectionName: 'Channel' });
  }
}

export default UserService;
