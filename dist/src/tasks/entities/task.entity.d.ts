import { List } from 'src/lists/entities/list.entity';
export declare enum TaskStatus {
    COMPLETED = "completed",
    NEW = "new",
    INPROGRESS = "in-progress"
}
export declare class Task {
    id: number;
    title: string;
    status: TaskStatus;
    order: number;
    list: List;
    createdAt: Date;
    updatedAt: Date;
}
