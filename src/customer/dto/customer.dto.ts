import { v4 as uuid } from 'uuid';
import {
    IsEmail,
  IsNotEmpty,
    IsNumber,
    IsString,
    IsUUID,
    ValidateNested,
    ValidationOptions,
  } from 'class-validator';

export class CreateCustomerDto{
    @IsUUID(4, { message: 'this must to be uuid' })
    @IsNotEmpty()
    uuid: string;

    @IsString()
@IsNotEmpty()
    nombre: string;
    @IsString()
@IsNotEmpty()
    direccion: string;
    @IsString()
@IsNotEmpty()
    telefono: string;
    @IsEmail()
    @IsNotEmpty()
    email: string;
} 

export class UpdateCustomerDto{
    @IsString()
    @IsNotEmpty()
    nombre?: string;
    @IsString()
    @IsNotEmpty()
    direccion?: string;
    @IsString()
    @IsNotEmpty()
    telefono?: string;
    @IsEmail()
    @IsNotEmpty()
    email?: string;
}