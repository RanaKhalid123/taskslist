import { ObjectType, Field } from '@nestjs/graphql';
import { ResponsePayload, ResponsePayloadResponse } from '../../lists/dto/response.payload.dto';
import { Task } from '../entities/task.entity';

@ObjectType()
export class TaskPayload extends ResponsePayloadResponse {
    @Field({ nullable: true })
    task: Task;

    @Field({ nullable: true })
    response?: ResponsePayload
}
