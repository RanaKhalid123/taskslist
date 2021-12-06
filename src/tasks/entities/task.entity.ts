import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { List } from '../../lists/entities/list.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';

export enum TaskStatus {
  COMPLETED = 'completed',
  NEW = 'new',
  INPROGRESS = 'in-progress'
}

registerEnumType(TaskStatus, {
  name: "TaskStatus",
  description: "The task status",
});

@ObjectType()
@Entity('Tasks')
export class Task {

  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ nullable: false })
  @Column()
  title: string;

  @Column({ type: "enum", enum: TaskStatus, default: TaskStatus.NEW })
  @Field(type => TaskStatus)
  status: TaskStatus

  @Field({ nullable: true })
  @Column({ nullable: true })
  order: number;

  @ManyToOne(() => List, list => list.tasks, { onDelete: 'CASCADE' })
  @Field(type => [List], { nullable: true })
  list: List;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}

