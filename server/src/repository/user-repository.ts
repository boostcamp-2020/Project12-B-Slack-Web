import { EntityRepository, Repository } from 'typeorm';
import User from '@model/user';

@EntityRepository(User)
export default class UserRepository extends Repository<User> {}
