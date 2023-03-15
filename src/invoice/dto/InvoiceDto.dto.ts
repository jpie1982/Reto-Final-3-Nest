import { InvoiceDetailsDto } from "./InvoiceDetailsDto.dto";
import { v4 as uuid } from 'uuid';
import {
  IsNotEmpty,
    IsNumber,
    IsString,
    IsUUID,
    ValidateNested,
    ValidationOptions,
  } from 'class-validator';
//post
export class CreateInvoiceDto { 
@IsUUID(4, { message: 'this must to be uuid' })
@IsNotEmpty()
uuid = uuid();

@IsString()
@IsNotEmpty()
nombre: string;



invoice_detail: InvoiceDetailsDto[];
}

///patch
export class UpdateInvoiceDto { 
    @IsUUID(4, { message: 'this must to be uuid' })
    @IsNotEmpty()
    uuid? = uuid();
    @IsString()
    @IsNotEmpty()
    nombre?: string;
  
    invoice_detail?: InvoiceDetailsDto[];
    }