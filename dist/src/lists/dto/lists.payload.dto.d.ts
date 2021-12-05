import { ResponsePayloadResponse } from '../dto/response.payload.dto';
import { List } from '../entities/list.entity';
export declare class ListsPayload extends ResponsePayloadResponse {
    lists: List[];
}
