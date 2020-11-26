import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, DeleteDateColumn } from 'typeorm';
import { IsUrl } from 'class-validator';
import Section from '@model/section';
import UserChatroom from '@model/user-chatroom';
import Message from '@model/message';

@Entity({ name: 'user' })
export default class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column({ length: 30, unique: true })
  id: string;

  @Column({ length: 40, nullable: true })
  password: string;

  @Column({ nullable: true })
  @IsUrl()
  profileUri: string;

  @Column({ length: 20 })
  fullName: string;

  @Column({ length: 20 })
  displayName: string;

  @Column({ nullable: true })
  whatIDo: string;

  @Column({ length: 20, nullable: true })
  phoneNumber: string;

  @Column()
  isSocial: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => Section, (section) => section.user)
  sections: Section[];

  @OneToMany(() => UserChatroom, (userChatroom) => userChatroom.user)
  userChatrooms: UserChatroom[];

  @OneToMany(() => Message, (message) => message.user)
  messages: Message[];
}
