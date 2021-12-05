import { ObjectType, Field } from '@nestjs/graphql';
import { ResponsePayload, ResponsePayloadResponse } from './response.payload.dto';
import { List } from '../entities/list.entity';

@ObjectType()
export class ListPayload extends ResponsePayloadResponse {
    @Field({ nullable: true })
    list: List;

    @Field({ nullable: true })
    response?: ResponsePayload
}
