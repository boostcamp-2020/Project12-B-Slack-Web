import { Entity, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, PrimaryGeneratedColumn, DeleteDateColumn } from 'typeorm';
import User from '@model/user';
import Chatroom from '@model/chatroom';

@Entity({ name: 'user_chatroom' })
export default class UserChatroom {
  @PrimaryGeneratedColumn()
  userChatroomId: number;

  @Column()
  sectionName: string;

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
}
