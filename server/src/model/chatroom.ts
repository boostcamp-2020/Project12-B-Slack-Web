import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { IsIn } from 'class-validator';

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
}
