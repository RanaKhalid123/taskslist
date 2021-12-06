import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Task } from '../../tasks/entities/task.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity('Lists')
export class List {

  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ nullable: false })
  @Column()
  title: string;

  @Field(() => [Task], { nullable: true })
  @OneToMany(() => Task, task => task.list, { eager: true, onUpdate: 'CASCADE', onDelete: "CASCADE" })
  tasks: Task[];

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}

