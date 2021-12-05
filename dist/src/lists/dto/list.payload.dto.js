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
exports.ListPayload = void 0;
const graphql_1 = require("@nestjs/graphql");
const response_payload_dto_1 = require("./response.payload.dto");
const list_entity_1 = require("../entities/list.entity");
let ListPayload = class ListPayload extends response_payload_dto_1.ResponsePayloadResponse {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", list_entity_1.List)
], ListPayload.prototype, "list", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", response_payload_dto_1.ResponsePayload)
], ListPayload.prototype, "response", void 0);
ListPayload = __decorate([
    (0, graphql_1.ObjectType)()
], ListPayload);
exports.ListPayload = ListPayload;
//# sourceMappingURL=list.payload.dto.js.map