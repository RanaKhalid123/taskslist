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
exports.ListsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const lists_service_1 = require("./lists.service");
const list_entity_1 = require("./entities/list.entity");
const create_list_input_1 = require("./dto/create-list.input");
const list_payload_dto_1 = require("./dto/list.payload.dto");
const lists_payload_dto_1 = require("./dto/lists.payload.dto");
const common_1 = require("@nestjs/common");
let ListsResolver = class ListsResolver {
    constructor(listsService) {
        this.listsService = listsService;
    }
    async createList(createListInput) {
        return {
            list: await this.listsService.create(createListInput),
            response: { status: 200, message: 'List created successfully' }
        };
    }
    async getAllLists() {
        const requests = await this.listsService.findAll();
        if (requests) {
            return Object.assign(Object.assign({}, requests), { response: {
                    message: "OK", status: 200,
                } });
        }
        throw new common_1.NotFoundException({
            status: common_1.HttpStatus.NOT_FOUND,
            error: 'Lists not found',
        });
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => list_payload_dto_1.ListPayload),
    __param(0, (0, graphql_1.Args)('createListInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_list_input_1.CreateListInput]),
    __metadata("design:returntype", Promise)
], ListsResolver.prototype, "createList", null);
__decorate([
    (0, graphql_1.Query)(returns => lists_payload_dto_1.ListsPayload),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ListsResolver.prototype, "getAllLists", null);
ListsResolver = __decorate([
    (0, graphql_1.Resolver)(() => list_entity_1.List),
    __metadata("design:paramtypes", [lists_service_1.ListsService])
], ListsResolver);
exports.ListsResolver = ListsResolver;
//# sourceMappingURL=lists.resolver.js.map