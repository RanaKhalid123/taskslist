import { TasksService } from './tasks.service';
import { Task } from './entities/task.entity';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { UpdateTaskPositionInput } from './dto/update-task-position.input';
export declare class TasksResolver {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    createTask(createTaskInput: CreateTaskInput): Promise<{
        task: Task;
        response: {
            status: number;
            message: string;
        };
    }>;
    updateTask(updateTaskInput: UpdateTaskInput): Promise<{
        task: Task;
        response: {
            status: number;
            message: string;
        };
    }>;
    updateTaskPostion(updateTaskPositionInput: UpdateTaskPositionInput): Promise<{
        task: Task;
        response: {
            status: number;
            message: string;
        };
    }>;
}
