import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, DeleteDateColumn } from 'typeorm';
import { IsIn } from 'class-validator';
import UserChatroom from '@model/user-chatroom';
import Message from '@model/message';

@Entity({ name: 'chatroom' })
export default class Chatroom {
  @PrimaryGeneratedColumn()
  chatroomId: number;

  @Column()
  description: string;

  @Column()
  title: string;

  @Column()
  isPrivate: boolean;

  @Column()
  @IsIn(['DM', 'Channel'])
  chatType: string;

  @Column()
  topic: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => UserChatroom, (userChatroom) => userChatroom.user)
  userChatrooms: UserChatroom[];

  @OneToMany(() => Message, (message) => message.chatroom)
  messages: Message[];
}
