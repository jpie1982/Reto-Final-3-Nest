import { CustomerService } from '../services/customer.service';
import { CreateCustomerDto, UpdateCustomerDto } from '../dto/customer.dto';
export declare class CustomerController {
    private readonly service;
    constructor(service: CustomerService);
    getAll(): CreateCustomerDto[];
    getOne(id: string): CreateCustomerDto | undefined;
    createCustomer(body: CreateCustomerDto): number;
    deleteCliente(id: string): void;
    updateFactura(id: string, updatedFields: UpdateCustomerDto): {
        nombre: string;
        direccion: string;
        telefono: string;
        email: string;
        uuid: string;
    };
    putFactura(id: string, updatedFields: UpdateCustomerDto): {
        nombre: string;
        direccion: string;
        telefono: string;
        email: string;
        uuid: string;
    };
}
