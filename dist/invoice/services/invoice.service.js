"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let InvoiceService = class InvoiceService {
    constructor() {
        this.facturas = [
            {
                "uuid": (0, uuid_1.v4)(),
                "nombre": "Juan Iturbide",
                "invoice_detail": [
                    {
                        "idDetail": "id01",
                        "cantidad": 10,
                        "detail": "Zapato de Goma",
                        "precio": 1000
                    }
                ]
            },
            {
                "uuid": (0, uuid_1.v4)(),
                "nombre": "Maria Perez",
                "invoice_detail": [
                    {
                        "idDetail": "id02",
                        "cantidad": 5,
                        "detail": "Zapato para dama",
                        "precio": 1200
                    }
                ]
            }
        ];
    }
    getAll() {
        return this.facturas;
    }
    getOne(uuid) {
        return this.facturas.find(id => id.uuid === uuid);
    }
    createFactura(agregar) {
        return this.facturas.push(agregar);
    }
    deleteFactura(id) {
        this.facturas = this.facturas.filter(factura => factura.uuid != id);
    }
    updateFactura(uuid, updatedFields) {
        const factura = this.getOne(uuid);
        if (!factura) {
            throw new Error(`La factura con uuid ${uuid} no existe`);
        }
        const newFactura = Object.assign(Object.assign({}, factura), updatedFields);
        this.facturas = this.facturas.map(factura => factura.uuid === uuid ? newFactura : factura);
        return newFactura;
    }
    putFactura(uuid, updatedFields) {
        const facturaIndex = this.facturas.findIndex((factura) => factura.uuid === uuid);
        if (facturaIndex === -1) {
            throw new Error(`La factura con uuid ${uuid} no existe`);
        }
        const facturaToUpdate = Object.assign({}, this.facturas[facturaIndex]);
        const updatedFactura = Object.assign(Object.assign({}, facturaToUpdate), updatedFields);
        this.facturas[facturaIndex] = updatedFactura;
        return updatedFactura;
    }
};
InvoiceService = __decorate([
    (0, common_1.Injectable)()
], InvoiceService);
exports.InvoiceService = InvoiceService;
//# sourceMappingURL=invoice.service.js.map