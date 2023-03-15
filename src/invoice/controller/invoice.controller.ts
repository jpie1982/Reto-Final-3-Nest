import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, Put, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { InvoiceService } from '../services/invoice.service';
import { CreateInvoiceDto, UpdateInvoiceDto } from '../dto/InvoiceDto.dto';
import { AuthGuard } from 'src/guards/guard';

@Controller('invoice')
export class InvoiceController {
constructor(private readonly service: InvoiceService) {}

@Get()
getAll(){
    return this.service.getAll();
  }
  
@Get(':uuid')
@UseGuards(AuthGuard)
getOne(@Param('uuid',ParseUUIDPipe) id: string){
  return this.service.getOne(id)
}

@Post()
@UseGuards(AuthGuard)
@UsePipes(new ValidationPipe())
  createFactura(@Body() body: CreateInvoiceDto) {
    return this.service.createFactura(body);
  }

 @Delete(':uuid')
 @UseGuards(AuthGuard)
 deleteFactura(@Param('uuid') id:string){
  this.service.deleteFactura(id)
 }

 @Patch(':uuid')
 updateFactura(@Param('uuid',ParseUUIDPipe) id: string, @Body()updatedFields: UpdateInvoiceDto){
  return this.service.updateFactura(id, updatedFields);
 }


 @Put(':uuid')
 @UseGuards(AuthGuard)
 putFactura(@Param('uuid',ParseUUIDPipe) id: string, @Body()updatedFields: UpdateInvoiceDto){
  return this.service.updateFactura(id, updatedFields);
 }
}


