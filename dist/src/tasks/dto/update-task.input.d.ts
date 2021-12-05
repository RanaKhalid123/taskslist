import { CreateTaskInput } from './create-task.input';
import { TaskStatus } from '../entities/task.entity';
declare const UpdateTaskInput_base: import("@nestjs/common").Type<Partial<CreateTaskInput>>;
export declare class UpdateTaskInput extends UpdateTaskInput_base {
    id: number;
    status?: TaskStatus;
}
export {};
