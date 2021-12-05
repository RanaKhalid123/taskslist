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
exports.TasksResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const tasks_service_1 = require("./tasks.service");
const task_entity_1 = require("./entities/task.entity");
const create_task_input_1 = require("./dto/create-task.input");
const update_task_input_1 = require("./dto/update-task.input");
const task_payload_dto_1 = require("./dto/task.payload.dto");
const update_task_position_input_1 = require("./dto/update-task-position.input");
let TasksResolver = class TasksResolver {
    constructor(tasksService) {
        this.tasksService = tasksService;
    }
    async createTask(createTaskInput) {
        return {
            task: await this.tasksService.create(createTaskInput),
            response: { status: 200, message: 'Task created successfully' }
        };
    }
    async updateTask(updateTaskInput) {
        return {
            task: await this.tasksService.update(updateTaskInput),
            response: { status: 200, message: 'Task updated successfully' }
        };
    }
    async updateTaskPostion(updateTaskPositionInput) {
        return {
            task: await this.tasksService.updateTaskPosition(updateTaskPositionInput),
            response: { status: 200, message: 'Task Position updated successfully' }
        };
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => task_payload_dto_1.TaskPayload),
    __param(0, (0, graphql_1.Args)('createTaskInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_task_input_1.CreateTaskInput]),
    __metadata("design:returntype", Promise)
], TasksResolver.prototype, "createTask", null);
__decorate([
    (0, graphql_1.Mutation)(() => task_payload_dto_1.TaskPayload),
    __param(0, (0, graphql_1.Args)('updateTaskInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_task_input_1.UpdateTaskInput]),
    __metadata("design:returntype", Promise)
], TasksResolver.prototype, "updateTask", null);
__decorate([
    (0, graphql_1.Mutation)(() => task_payload_dto_1.TaskPayload),
    __param(0, (0, graphql_1.Args)('updateTaskPositionInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_task_position_input_1.UpdateTaskPositionInput]),
    __metadata("design:returntype", Promise)
], TasksResolver.prototype, "updateTaskPostion", null);
TasksResolver = __decorate([
    (0, graphql_1.Resolver)(() => task_entity_1.Task),
    __metadata("design:paramtypes", [tasks_service_1.TasksService])
], TasksResolver);
exports.TasksResolver = TasksResolver;
//# sourceMappingURL=tasks.resolver.js.map