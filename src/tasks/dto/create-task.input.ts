import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateTaskInput {

  @Field()
  @IsNotEmpty()
  readonly title: string;

  @Field()
  @IsNotEmpty()
  readonly listId: number;

  @Field({ nullable: true })
  @IsNotEmpty()
  readonly order?: number;
}
