import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, DeleteDateColumn } from 'typeorm';
import Reaction from '@model/reaction';
import User from '@model/user';
import Reply from '@model/reply';

@Entity({ name: 'reply_reaction' })
export default class ReplyReaction {
  @PrimaryGeneratedColumn()
  replyReactionId: number;

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

  @ManyToOne(() => Reply, (reply) => reply.replyId)
  @JoinColumn({ name: 'replyId' })
  reply: Reply;
}
