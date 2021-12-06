import { CreateListInput } from './dto/create-list.input';
import { UpdateListInput } from './dto/update-list.input';
import { Repository } from 'typeorm';
import { List } from './entities/list.entity';
import { ListsPayload } from './dto/lists.payload.dto';
export declare class ListsService {
    private listRepository;
    constructor(listRepository: Repository<List>);
    createList(createListInput: CreateListInput): Promise<List>;
    findAll(): Promise<ListsPayload>;
    findOne(id: number): Promise<List>;
    update(id: number, updateListInput: UpdateListInput): Promise<UpdateListInput & List>;
}
