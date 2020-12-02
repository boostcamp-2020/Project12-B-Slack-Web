import { getCustomRepository } from 'typeorm';
import UserRepository from '@repository/user-repository';
import NotFoundError from '@error/not-found-error';

class UserService {
  static instance: UserService;

  userRepository: UserRepository;

  constructor() {
    this.userRepository = getCustomRepository(UserRepository);
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
    await this.userRepository.save({ id, fullName: id, displayName: id, isSocial: true, profileUri });
  }
}

export default UserService;
