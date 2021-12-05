import { CreateTaskInput } from './create-task.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { TaskStatus } from '../entities/task.entity';

@InputType()
export class UpdateTaskInput extends PartialType(CreateTaskInput) {
  @Field(() => Int)
  id: number;

  @Field(() => TaskStatus)
  status?: TaskStatus;
}
