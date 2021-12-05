import { Task } from 'src/tasks/entities/task.entity';
export declare class List {
    id: number;
    title: string;
    tasks: Task[];
    createdAt: Date;
    updatedAt: Date;
}
