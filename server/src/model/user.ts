import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { IsUrl } from 'class-validator';
import Section from '@model/section';
import UserChatroom from '@model/user-chatroom';

@Entity({ name: 'user' })
export default class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column({ length: 30, unique: true })
  id: string;

  @Column({ length: 40 })
  password: string;

  @Column()
  @IsUrl()
  profileUri: string;

  @Column({ length: 20 })
  fullName: string;

  @Column({ length: 20 })
  displayName: string;

  @Column()
  whatIDo: string;

  @Column({ length: 20 })
  phoneNumber: string;

  @Column()
  isSocial: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Section, (section) => section.user)
  sections: Section[];

  @OneToMany(() => UserChatroom, (userChatroom) => userChatroom.user)
  userChatrooms: UserChatroom[];
}
