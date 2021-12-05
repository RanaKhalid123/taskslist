import { ResponsePayload, ResponsePayloadResponse } from './response.payload.dto';
import { List } from '../entities/list.entity';
export declare class ListPayload extends ResponsePayloadResponse {
    list: List;
    response?: ResponsePayload;
}
