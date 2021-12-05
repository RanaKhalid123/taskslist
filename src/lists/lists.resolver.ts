import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ListsService } from './lists.service';
import { List } from './entities/list.entity';
import { CreateListInput } from './dto/create-list.input';
import { ListPayload } from './dto/list.payload.dto';
import { ListsPayload } from './dto/lists.payload.dto';
import { HttpStatus, NotFoundException } from '@nestjs/common';

@Resolver(() => List)
export class ListsResolver {
  constructor(private readonly listsService: ListsService) { }

  /**
   * Mutations lists resolver
   * @param createListInput 
   * @returns  
   */
  @Mutation(() => ListPayload)
  async createList(@Args('createListInput') createListInput: CreateListInput) {
    return {
      list: await this.listsService.create(createListInput),
      response: { status: 200, message: 'List created successfully' }
    };
  }

  /**
   * Querys lists resolver
   * @returns all lists 
   */
  @Query(returns => ListsPayload)
  async getAllLists(): Promise<ListsPayload> {
    const requests = await this.listsService.findAll()
    if (requests) {
      return {
        ...requests,
        response: {
          message: "OK", status: 200,
        }
      }
    }
    throw new NotFoundException({
      status: HttpStatus.NOT_FOUND,
      error: 'Lists not found',
    });
  }
}
