import { EntityRepository, Repository } from 'typeorm';
import Section from '@model/section';

@EntityRepository(Section)
export default class SectionRepository extends Repository<Section> {}
