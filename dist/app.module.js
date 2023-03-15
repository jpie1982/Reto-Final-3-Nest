"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const invoice_controller_1 = require("./invoice/controller/invoice.controller");
const invoice_service_1 = require("./invoice/services/invoice.service");
const customer_controller_1 = require("./customer/controller/customer.controller");
const customer_service_1 = require("./customer/services/customer.service");
const customer_module_1 = require("./customer/customer.module");
const invoice_module_1 = require("./invoice/invoice.module");
const middleware_1 = require("./middleware/middleware");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(middleware_1.MiddlewarePut).forRoutes('*');
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [customer_module_1.CustomerModule, invoice_module_1.InvoiceModule],
        controllers: [invoice_controller_1.InvoiceController, customer_controller_1.CustomerController],
        providers: [invoice_service_1.InvoiceService, customer_service_1.CustomerService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map