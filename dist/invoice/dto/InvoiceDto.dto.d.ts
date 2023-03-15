import { InvoiceDetailsDto } from "./InvoiceDetailsDto.dto";
export declare class CreateInvoiceDto {
    uuid: string;
    nombre: string;
    invoice_detail: InvoiceDetailsDto[];
}
export declare class UpdateInvoiceDto {
    uuid?: string | undefined;
    nombre?: string;
    invoice_detail?: InvoiceDetailsDto[];
}
