import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { Task } from './entities/task.entity'
import { ConfigService } from "@nestjs/config";
import { ListsService } from '../lists/lists.service';
import { UpdateTaskPositionInput } from './dto/update-task-position.input';

require("dotenv").config();


@Injectable()
export class TasksService {
  constructor(@InjectRepository(Task)
  private taskRepository: Repository<Task>,
    private readonly listsService: ListsService,
    private readonly configService: ConfigService) { }

  /**
   * Creates tasks service
   * @param createListInput 
   * @returns  
   */
  async create(createListInput: CreateTaskInput) {
    const list = await this.listsService.findOne(createListInput.listId)
    let task = this.taskRepository.create(createListInput);
    task.list = list;
    return await this.taskRepository.save(task)
  }

  /**
   * Updates tasks service
   * @param updateTaskInput 
   * @returns  
   */
  async update(updateTaskInput: UpdateTaskInput) {
    const { id, status, title } = updateTaskInput
    const update = await getConnection()
      .createQueryBuilder()
      .update(Task)
      .set({ status: status, title: title })
      .where("id = :id", { id })
      .execute();
    if (update.affected > 0) {
      return await this.taskRepository.findOne(id);
    }
    throw new NotFoundException({
      status: HttpStatus.NOT_FOUND,
      error: `${Task} Not found`,
    })
  }

  /**
   * Updates task position
   * @param updateTaskPositionInput 
   * @returns  
   */
  async updateTaskPosition(updateTaskPositionInput: UpdateTaskPositionInput) {
    const { id, order } = updateTaskPositionInput
    const update = await getConnection()
      .createQueryBuilder()
      .update(Task)
      .set({ order: order })
      .where("id = :id", { id })
      .execute();
    if (update.affected > 0) {
      return await this.taskRepository.findOne(id);
    }
    throw new NotFoundException({
      status: HttpStatus.NOT_FOUND,
      error: `${Task} Not found`,
    })
  }
}
