import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateListInput {

  @Field()
  @IsNotEmpty()
  readonly title: string;
}
