import { v4 as uuid } from 'uuid';
import {
    IsNumber,
    IsString,
    IsUUID,
    ValidateNested,
    ValidationOptions,
  } from 'class-validator';

export class InvoiceDetailsDto {
    idDetail: string;

    @IsNumber()
    cantidad: number;
    @IsString()
    detail: string;
    @IsNumber()
    precio: number;
}