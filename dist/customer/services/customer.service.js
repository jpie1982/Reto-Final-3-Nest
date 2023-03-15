"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let CustomerService = class CustomerService {
    constructor() {
        this.clientes = [
            {
                "uuid": (0, uuid_1.v4)(),
                "nombre": "Lionel Messi",
                "direccion": "Roldan 1910 ,entre 4 y 5",
                "telefono": "099073927",
                "email": "jpie1982@gmail.com"
            },
            {
                "uuid": (0, uuid_1.v4)(),
                "nombre": "Roberto Carlos",
                "direccion": "Calle amigos al 1000",
                "telefono": "091713327",
                "email": "RC1000@gmail.com"
            }
        ];
    }
    getAll() {
        return this.clientes;
    }
    getOne(uuid) {
        return this.clientes.find(id => id.uuid === uuid);
    }
    createCliente(agregar) {
        return this.clientes.push(agregar);
    }
    deletecliente(id) {
        this.clientes = this.clientes.filter(clientes => clientes.uuid != id);
    }
    updateCliente(uuid, updatedFields) {
        const cliente = this.getOne(uuid);
        if (!cliente) {
            throw new Error(`La factura con uuid ${uuid} no existe`);
        }
        const newCliente = Object.assign(Object.assign({}, cliente), updatedFields);
        this.clientes = this.clientes.map(cliente => cliente.uuid === uuid ? newCliente : cliente);
        return newCliente;
    }
    putCliente(uuid, updatedFields) {
        const clienteIndex = this.clientes.findIndex((cliente) => cliente.uuid === uuid);
        if (clienteIndex === -1) {
            throw new Error(`La factura con uuid ${uuid} no existe`);
        }
        const clienteToUpdate = Object.assign({}, this.clientes[clienteIndex]);
        const updatedCliente = Object.assign(Object.assign({}, clienteToUpdate), updatedFields);
        this.clientes[clienteIndex] = updatedCliente;
        return updatedCliente;
    }
};
CustomerService = __decorate([
    (0, common_1.Injectable)()
], CustomerService);
exports.CustomerService = CustomerService;
//# sourceMappingURL=customer.service.js.map