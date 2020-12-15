import { getCustomRepository } from 'typeorm';
import SocketRepository from '@repository/socket-repository';
import UserRepository from '@repository/user-repository';
import validator from '@utils/validator';

class SocketService {
  static instance: SocketService;

  socketRepository: SocketRepository;

  userRepository: UserRepository;

  constructor() {
    this.socketRepository = getCustomRepository(SocketRepository);
    this.userRepository = getCustomRepository(UserRepository);
  }

  static getInstance(): SocketService {
    if (!SocketService.instance) {
      SocketService.instance = new SocketService();
    }
    return SocketService.instance;
  }

  async createSocket(userId, socketId) {
    const user = await this.userRepository.findOne({ userId });
    const newSocket = this.socketRepository.create({ user, socketId });
    await this.socketRepository.save(newSocket);
  }

  async deleteSocket(socketId) {
    await this.socketRepository.delete({ socketId });
  }

  async getSocketId(userId) {
    const user = await this.userRepository.findOne({ userId });
    const socketInfos = await this.socketRepository.find({ user });
    return socketInfos;
  }
}

export default SocketService;
