import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
  DeleteDateColumn
} from 'typeorm';
import User from '@model/user';
import Chatroom from '@model/chatroom';
import MessageReaction from '@model/message-reaction';

@Entity({ name: 'message' })
export default class Message {
  @PrimaryGeneratedColumn()
  messageId: number;

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

  @ManyToOne(() => Chatroom, (chatroom) => chatroom.chatroomId)
  @JoinColumn({ name: 'chatroomId' })
  chatroom: Chatroom;

  @OneToMany(() => MessageReaction, (messageReaction) => messageReaction.message)
  messageReactions: MessageReaction[];
}
