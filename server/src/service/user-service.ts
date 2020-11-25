import { getCustomRepository } from 'typeorm';
import UserRepository from '@repository/user-repository';

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
    const userCount = usersAndCount[1];
    const users = usersAndCount[0].map((user) => {
      const { userId, displayName, profileUri } = user;
      return { userId, displayName, profileUri };
    });
    return { userCount, users };
  }

  async getUser(userId: number) {
    const user = await this.userRepository.findOne(userId);
    const { id, profileUri, fullName, displayName, whatIDo, phoneNumber } = user;
    return { userId, id, profileUri, fullName, displayName, whatIDo, phoneNumber };
  }
}

export default UserService;
