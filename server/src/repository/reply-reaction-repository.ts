import { EntityRepository, Repository } from 'typeorm';
import ReplyReaction from '@model/reply-reaction';

@EntityRepository(ReplyReaction)
export default class ReplyReactionRepository extends Repository<ReplyReaction> {}
