import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, DeleteDateColumn } from 'typeorm';
import { IsBoolean, IsIn, IsString } from 'class-validator';
import UserChatroom from '@model/user-chatroom';
import Message from '@model/message';
import ChatType from '@constants/chat-type';

@Entity({ name: 'chatroom' })
export default class Chatroom {
  @PrimaryGeneratedColumn()
  chatroomId: number;

  @Column({ unique: true, nullable: true })
  @IsString()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  @IsBoolean()
  isPrivate: boolean;

  @Column()
  @IsIn([ChatType.DM, ChatType.Channel])
  chatType: string;

  @Column({ nullable: true })
  topic: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => UserChatroom, (userChatroom) => userChatroom.chatroom)
  userChatrooms: UserChatroom[];

  @OneToMany(() => Message, (message) => message.chatroom)
  messages: Message[];
}
