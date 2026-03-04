import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Name: string;

  @Column()
  writer: string;

  @Column({ default: true })
  isActive: boolean;

  @DeleteDateColumn()
  deletedAt?: Date;
}
