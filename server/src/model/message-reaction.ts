import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, DeleteDateColumn } from 'typeorm';
import Reaction from '@model/reaction';
import User from '@model/user';

@Entity({ name: 'message_reaction' })
export default class MessageReaction {
  @PrimaryGeneratedColumn()
  MessageReactionId: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => Reaction, (reaction) => reaction.reactionId)
  @JoinColumn({ name: 'reactionId' })
  reaction: Reaction;

  @ManyToOne(() => User, (user) => user.userId)
  @JoinColumn({ name: 'userId' })
  user: User;
}
