import { ResponsePayload, ResponsePayloadResponse } from '../../lists/dto/response.payload.dto';
import { Task } from '../entities/task.entity';
export declare class TaskPayload extends ResponsePayloadResponse {
    task: Task;
    response?: ResponsePayload;
}
