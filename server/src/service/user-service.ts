import { getCustomRepository } from 'typeorm';
import UserRepository from '@repository/user-repository';
import ChatroomRepository from '@repository/chatroom-repository';
import UserChatroomRepository from '@repository/user-chatroom-repository';
import NotFoundError from '@error/not-found-error';
import Chatroom from '@model/chatroom';
import User from '@model/user';
import DefaultSectionName from '@constants/default-section-name';

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

  async createUser(id: string, profileUri: string) {
    const newUser = await this.userRepository.save({ id, fullName: id, displayName: id, isSocial: true, profileUri });
    const newDirectMessage = await this.createDirectMessage();
    await this.joinDirectMessage(newUser, newDirectMessage);
    await this.joinDefaultChannel(newUser);
  }

  private async createDirectMessage() {
    const newDirectMessage = await this.chatroomRepository.save({ isPrivate: true, chatType: 'DM' });
    return newDirectMessage;
  }

  private async joinDirectMessage(user: User, chatroom: Chatroom) {
    await this.userChatroomRepository.save({ user, chatroom, sectionName: DefaultSectionName.DirectMessages });
  }

  private async joinDefaultChannel(user: User) {
    const title = 'random';
    const chatroom = await this.chatroomRepository.findOne({ title });
    await this.userChatroomRepository.save({ user, chatroom, sectionName: DefaultSectionName.Channels });
  }
}

export default UserService;
