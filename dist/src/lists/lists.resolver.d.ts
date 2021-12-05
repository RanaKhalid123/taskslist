import { ListsService } from './lists.service';
import { List } from './entities/list.entity';
import { CreateListInput } from './dto/create-list.input';
import { ListsPayload } from './dto/lists.payload.dto';
export declare class ListsResolver {
    private readonly listsService;
    constructor(listsService: ListsService);
    createList(createListInput: CreateListInput): Promise<{
        list: List;
        response: {
            status: number;
            message: string;
        };
    }>;
    getAllLists(): Promise<ListsPayload>;
}
