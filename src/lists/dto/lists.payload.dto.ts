import { ObjectType, Field, Int } from '@nestjs/graphql';
import { ResponsePayloadResponse } from '../dto/response.payload.dto';
import { List } from '../entities/list.entity';

@ObjectType()
export class ListsPayload extends ResponsePayloadResponse {
  @Field(type => [List], { nullable: 'itemsAndList' })
  lists: List[];
}
