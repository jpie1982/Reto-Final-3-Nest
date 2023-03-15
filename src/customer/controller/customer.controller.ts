
import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, Put, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { CustomerService } from '../services/customer.service';
import { CreateCustomerDto, UpdateCustomerDto } from '../dto/customer.dto';
import { AuthGuard } from 'src/guards/guard';

@Controller('customer')
export class CustomerController {
    constructor(private readonly service: CustomerService) {}

@Get()
getAll(){
    return this.service.getAll();
}
@Get(':uuid')
@UseGuards(AuthGuard)
getOne(@Param('uuid') id : string){
    return this.service.getOne(id);
}

@Post()
@UseGuards(AuthGuard)
createCustomer(@Body()body: CreateCustomerDto){
return this.service.createCliente(body);
}

@Delete(':uuid')
@UseGuards(AuthGuard)
deleteCliente(@Param('uuid') id : string){
    this.service.deletecliente(id);
}

@Patch(':uuid')
@UseGuards(AuthGuard)
updateFactura(@Param('uuid') id: string, @Body()updatedFields: UpdateCustomerDto){
 return this.service.updateCliente(id, updatedFields);
}


@Put(':uuid')
putFactura(@Param('uuid') id: string, @Body()updatedFields: UpdateCustomerDto){
 return this.service.updateCliente(id, updatedFields);
}
}



