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
exports.InvoiceController = void 0;
const common_1 = require("@nestjs/common");
const invoice_service_1 = require("../services/invoice.service");
const InvoiceDto_dto_1 = require("../dto/InvoiceDto.dto");
const guard_1 = require("../../guards/guard");
let InvoiceController = class InvoiceController {
    constructor(service) {
        this.service = service;
    }
    getAll() {
        return this.service.getAll();
    }
    getOne(id) {
        return this.service.getOne(id);
    }
    createFactura(body) {
        return this.service.createFactura(body);
    }
    deleteFactura(id) {
        this.service.deleteFactura(id);
    }
    updateFactura(id, updatedFields) {
        return this.service.updateFactura(id, updatedFields);
    }
    putFactura(id, updatedFields) {
        return this.service.updateFactura(id, updatedFields);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InvoiceController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':uuid'),
    (0, common_1.UseGuards)(guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('uuid', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InvoiceController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(guard_1.AuthGuard),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [InvoiceDto_dto_1.CreateInvoiceDto]),
    __metadata("design:returntype", void 0)
], InvoiceController.prototype, "createFactura", null);
__decorate([
    (0, common_1.Delete)(':uuid'),
    (0, common_1.UseGuards)(guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('uuid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InvoiceController.prototype, "deleteFactura", null);
__decorate([
    (0, common_1.Patch)(':uuid'),
    __param(0, (0, common_1.Param)('uuid', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, InvoiceDto_dto_1.UpdateInvoiceDto]),
    __metadata("design:returntype", void 0)
], InvoiceController.prototype, "updateFactura", null);
__decorate([
    (0, common_1.Put)(':uuid'),
    (0, common_1.UseGuards)(guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('uuid', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, InvoiceDto_dto_1.UpdateInvoiceDto]),
    __metadata("design:returntype", void 0)
], InvoiceController.prototype, "putFactura", null);
InvoiceController = __decorate([
    (0, common_1.Controller)('invoice'),
    __metadata("design:paramtypes", [invoice_service_1.InvoiceService])
], InvoiceController);
exports.InvoiceController = InvoiceController;
//# sourceMappingURL=invoice.controller.js.map