import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksService } from './tasks.service';
import { TasksResolver } from './tasks.resolver';
import { Task } from './entities/task.entity';
import { ConfigService } from '@nestjs/config';
import { ListsModule } from 'src/lists/lists.module';

@Module({
  imports: [TypeOrmModule.forFeature([Task]), ConfigService, ListsModule],
  providers: [TasksResolver, TasksService, ConfigService],
  exports: [TasksService]
})
export class TasksModule {

}
