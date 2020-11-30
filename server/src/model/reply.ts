import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  DeleteDateColumn,
  OneToMany
} from 'typeorm';
import User from '@model/user';
import Message from '@model/message';
import ReplyReaction from '@model/reply-reaction';
import { IsString } from 'class-validator';

@Entity({ name: 'reply' })
export default class Reply {
  @PrimaryGeneratedColumn()
  replyId: number;

  @Column()
  @IsString()
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => User, (user) => user.userId)
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => Message, (message) => message.messageId)
  @JoinColumn({ name: 'messageId' })
  message: Message;

  @OneToMany(() => ReplyReaction, (replyReaction) => replyReaction.reply)
  replyReactions: ReplyReaction[];
}
