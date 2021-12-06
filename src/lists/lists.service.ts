import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateListInput } from './dto/create-list.input';
import { UpdateListInput } from './dto/update-list.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { List } from './entities/list.entity'
import { ConfigService } from "@nestjs/config";
import { ListsPayload } from './dto/lists.payload.dto';
require("dotenv").config();


@Injectable()
export class ListsService {
  constructor(@InjectRepository(List)
  private listRepository: Repository<List>) { }

  /**
   * Creates lists service
   * @param createListInput 
   * @returns  
   */
  createList(createListInput: CreateListInput) {
    let user = this.listRepository.create(createListInput);
    return this.listRepository.save(user)
  }

  /**
   * Finds all
   * @returns all 
   */
  async findAll(): Promise<ListsPayload> {
    try {
      const lists = await this.listRepository.find();
      return {
        lists,
      }
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  /**
   * Finds one
   * @param id 
   * @returns one 
   */
  async findOne(id: number): Promise<List> {
    let user = await this.listRepository.findOne(id);
    if (user) {
      return user
    } else {
      throw new NotFoundException(`Record cannot find by id ${id}`)
    }
  }

  /**
   * Updates lists service
   * @param id 
   * @param updateListInput 
   * @returns  
   */
  async update(id: number, updateListInput: UpdateListInput) {
    let toUpdate = await this.listRepository.findOne(id);
    if (toUpdate) {
      return await this.listRepository.save(updateListInput);
    } else {
      throw new NotFoundException(`List cannot find by id ${id}`)
    }

  }
}
