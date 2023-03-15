import { CreateCustomerDto, UpdateCustomerDto } from '../dto/customer.dto';
export declare class CustomerService {
    private clientes;
    getAll(): CreateCustomerDto[];
    getOne(uuid: string): CreateCustomerDto | undefined;
    createCliente(agregar: CreateCustomerDto): number;
    deletecliente(id: string): void;
    updateCliente(uuid: string, updatedFields: UpdateCustomerDto): {
        nombre: string;
        direccion: string;
        telefono: string;
        email: string;
        uuid: string;
    };
    putCliente(uuid: string, updatedFields: UpdateCustomerDto): UpdateCustomerDto;
}
