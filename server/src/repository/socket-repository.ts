import { EntityRepository, Repository } from 'typeorm';
import Socket from '@model/socket';

@EntityRepository(Socket)
export default class SocketRepository extends Repository<Socket> {}
