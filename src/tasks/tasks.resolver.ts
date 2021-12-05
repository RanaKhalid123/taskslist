import { Resolver, Mutation, Args, Int } from '@nestjs/graphql';
import { TasksService } from './tasks.service';
import { Task } from './entities/task.entity';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { TaskPayload } from './dto/task.payload.dto';
import { UpdateTaskPositionInput } from './dto/update-task-position.input';

@Resolver(() => Task)
export class TasksResolver {
  constructor(private readonly tasksService: TasksService) { }

  /**
   * Mutations tasks resolver
   * @param createTaskInput 
   * @returns  
   */
  @Mutation(() => TaskPayload)
  async createTask(@Args('createTaskInput') createTaskInput: CreateTaskInput) {
    return {
      task: await this.tasksService.create(createTaskInput),
      response: { status: 200, message: 'Task created successfully' }
    };
  }

  /**
   * Mutations tasks resolver
   * @param updateTaskInput 
   * @returns  
   */
  @Mutation(() => TaskPayload)
  async updateTask(@Args('updateTaskInput') updateTaskInput: UpdateTaskInput) {
    return {
      task: await this.tasksService.update(updateTaskInput),
      response: { status: 200, message: 'Task updated successfully' }
    };
  }

  /**
   * Mutations tasks resolver
   * @param updateTaskPositionInput 
   * @returns  
   */
  @Mutation(() => TaskPayload)
  async updateTaskPostion(@Args('updateTaskPositionInput') updateTaskPositionInput: UpdateTaskPositionInput) {
    return {
      task: await this.tasksService.updateTaskPosition(updateTaskPositionInput),
      response: { status: 200, message: 'Task Position updated successfully' }
    };
  }
}
