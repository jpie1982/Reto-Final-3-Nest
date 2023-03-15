import { InvoiceService } from '../services/invoice.service';
import { CreateInvoiceDto, UpdateInvoiceDto } from '../dto/InvoiceDto.dto';
export declare class InvoiceController {
    private readonly service;
    constructor(service: InvoiceService);
    getAll(): CreateInvoiceDto[];
    getOne(id: string): CreateInvoiceDto | undefined;
    createFactura(body: CreateInvoiceDto): number;
    deleteFactura(id: string): void;
    updateFactura(id: string, updatedFields: UpdateInvoiceDto): {
        uuid: string;
        nombre: string;
        invoice_detail: import("../dto/InvoiceDetailsDto.dto").InvoiceDetailsDto[];
    };
    putFactura(id: string, updatedFields: UpdateInvoiceDto): {
        uuid: string;
        nombre: string;
        invoice_detail: import("../dto/InvoiceDetailsDto.dto").InvoiceDetailsDto[];
    };
}
