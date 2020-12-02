import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, DeleteDateColumn } from 'typeorm';
import MessageReaction from '@model/message-reaction';
import ReplyReaction from '@model/reply-reaction';
import { IsString, IsUrl } from 'class-validator';

@Entity({ name: 'reaction' })
export default class Reaction {
  @PrimaryGeneratedColumn()
  reactionId: number;

  @Column({ length: 30, unique: true })
  @IsString()
  title: string;

  @Column({ length: 100 })
  @IsUrl()
  imageUri: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => MessageReaction, (messageReaction) => messageReaction.reaction)
  messageReactions: MessageReaction[];

  @OneToMany(() => ReplyReaction, (replyReaction) => replyReaction.reaction)
  replyReactions: ReplyReaction[];
}
