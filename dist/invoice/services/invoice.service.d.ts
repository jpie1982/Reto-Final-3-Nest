import { CreateInvoiceDto, UpdateInvoiceDto } from '../dto/InvoiceDto.dto';
export declare class InvoiceService {
    private facturas;
    getAll(): CreateInvoiceDto[];
    getOne(uuid: string): CreateInvoiceDto | undefined;
    createFactura(agregar: CreateInvoiceDto): number;
    deleteFactura(id: string): void;
    updateFactura(uuid: string, updatedFields: UpdateInvoiceDto): {
        uuid: string;
        nombre: string;
        invoice_detail: import("../dto/InvoiceDetailsDto.dto").InvoiceDetailsDto[];
    };
    putFactura(uuid: string, updatedFields: UpdateInvoiceDto): UpdateInvoiceDto;
}
