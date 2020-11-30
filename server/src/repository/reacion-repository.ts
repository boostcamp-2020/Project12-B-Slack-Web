import { EntityRepository, Repository } from 'typeorm';
import Reaction from '@model/reaction';

@EntityRepository(Reaction)
export default class ReactionRepository extends Repository<Reaction> {}
