import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListsService } from './lists.service';
import { ListsResolver } from './lists.resolver';
import { List } from './entities/list.entity';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([List]), ConfigService],
  providers: [ListsResolver, ListsService, ConfigService],
  exports: [ListsService]
})
export class ListsModule {

}
