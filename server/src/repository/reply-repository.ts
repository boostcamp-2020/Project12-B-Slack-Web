import { EntityRepository, Repository } from 'typeorm';
import Reply from '@model/reply';

@EntityRepository(Reply)
export default class ReplyRepository extends Repository<Reply> {}
