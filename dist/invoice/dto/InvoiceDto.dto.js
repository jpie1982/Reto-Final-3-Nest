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
exports.UpdateInvoiceDto = exports.CreateInvoiceDto = void 0;
const uuid_1 = require("uuid");
const class_validator_1 = require("class-validator");
class CreateInvoiceDto {
    constructor() {
        this.uuid = (0, uuid_1.v4)();
    }
}
__decorate([
    (0, class_validator_1.IsUUID)(4, { message: 'this must to be uuid' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Object)
], CreateInvoiceDto.prototype, "uuid", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateInvoiceDto.prototype, "nombre", void 0);
exports.CreateInvoiceDto = CreateInvoiceDto;
class UpdateInvoiceDto {
    constructor() {
        this.uuid = (0, uuid_1.v4)();
    }
}
__decorate([
    (0, class_validator_1.IsUUID)(4, { message: 'this must to be uuid' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Object)
], UpdateInvoiceDto.prototype, "uuid", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateInvoiceDto.prototype, "nombre", void 0);
exports.UpdateInvoiceDto = UpdateInvoiceDto;
//# sourceMappingURL=InvoiceDto.dto.js.map