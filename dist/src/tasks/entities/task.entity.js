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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = exports.TaskStatus = void 0;
const graphql_1 = require("@nestjs/graphql");
const list_entity_1 = require("../../lists/entities/list.entity");
const typeorm_1 = require("typeorm");
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["COMPLETED"] = "completed";
    TaskStatus["NEW"] = "new";
    TaskStatus["INPROGRESS"] = "in-progress";
})(TaskStatus = exports.TaskStatus || (exports.TaskStatus = {}));
(0, graphql_1.registerEnumType)(TaskStatus, {
    name: "TaskStatus",
    description: "The task status",
});
let Task = class Task {
};
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Task.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Task.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: TaskStatus, default: TaskStatus.NEW }),
    (0, graphql_1.Field)(type => TaskStatus),
    __metadata("design:type", String)
], Task.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Task.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => list_entity_1.List, list => list.tasks, { onDelete: 'CASCADE' }),
    (0, graphql_1.Field)(type => [list_entity_1.List], { nullable: true }),
    __metadata("design:type", list_entity_1.List)
], Task.prototype, "list", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Task.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Task.prototype, "updatedAt", void 0);
Task = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)('Tasks')
], Task);
exports.Task = Task;
//# sourceMappingURL=task.entity.js.map