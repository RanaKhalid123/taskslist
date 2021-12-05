"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const task_entity_1 = require("./entities/task.entity");
const config_1 = require("@nestjs/config");
const lists_service_1 = require("../lists/lists.service");
require("dotenv").config();
let TasksService = class TasksService {
    constructor(taskRepository, listsService, configService) {
        this.taskRepository = taskRepository;
        this.listsService = listsService;
        this.configService = configService;
    }
    async create(createListInput) {
        const list = await this.listsService.findOne(createListInput.listId);
        let task = this.taskRepository.create(createListInput);
        task.list = list;
        return await this.taskRepository.save(task);
    }
    async update(updateTaskInput) {
        const { id, status, title } = updateTaskInput;
        const update = await (0, typeorm_2.getConnection)()
            .createQueryBuilder()
            .update(task_entity_1.Task)
            .set({ status: status, title: title })
            .where("id = :id", { id })
            .execute();
        if (update.affected > 0) {
            return await this.taskRepository.findOne(id);
        }
        throw new common_1.NotFoundException({
            status: common_1.HttpStatus.NOT_FOUND,
            error: `${task_entity_1.Task} Not found`,
        });
    }
    async updateTaskPosition(updateTaskPositionInput) {
        const { id, order } = updateTaskPositionInput;
        const update = await (0, typeorm_2.getConnection)()
            .createQueryBuilder()
            .update(task_entity_1.Task)
            .set({ order: order })
            .where("id = :id", { id })
            .execute();
        if (update.affected > 0) {
            return await this.taskRepository.findOne(id);
        }
        throw new common_1.NotFoundException({
            status: common_1.HttpStatus.NOT_FOUND,
            error: `${task_entity_1.Task} Not found`,
        });
    }
};
TasksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(task_entity_1.Task)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        lists_service_1.ListsService,
        config_1.ConfigService])
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map