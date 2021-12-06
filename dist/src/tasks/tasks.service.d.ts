import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { ConfigService } from "@nestjs/config";
import { ListsService } from '../lists/lists.service';
import { UpdateTaskPositionInput } from './dto/update-task-position.input';
export declare class TasksService {
    private taskRepository;
    private readonly listsService;
    private readonly configService;
    constructor(taskRepository: Repository<Task>, listsService: ListsService, configService: ConfigService);
    create(createListInput: CreateTaskInput): Promise<Task>;
    update(updateTaskInput: UpdateTaskInput): Promise<Task>;
    updateTaskPosition(updateTaskPositionInput: UpdateTaskPositionInput): Promise<Task>;
}
