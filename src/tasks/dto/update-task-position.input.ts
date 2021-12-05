import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateTaskPositionInput {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  order: number;
}
