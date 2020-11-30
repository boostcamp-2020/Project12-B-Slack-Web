import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, DeleteDateColumn } from 'typeorm';
import User from '@model/user';
import Message from '@model/message';

@Entity({ name: 'reply' })
export default class Reply {
  @PrimaryGeneratedColumn()
  replyId: number;

  @Column()
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
}
