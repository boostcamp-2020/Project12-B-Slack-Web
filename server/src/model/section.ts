import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, DeleteDateColumn } from 'typeorm';
import User from '@model/user';

@Entity({ name: 'section' })
export default class Section {
  @PrimaryGeneratedColumn()
  sectionId: number;

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
}
