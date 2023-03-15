import { Injectable, ParseUUIDPipe, MiddlewareConsumer, NotFoundException } from '@nestjs/common';
import { NOTFOUND } from 'dns';
import { CreateInvoiceDto, UpdateInvoiceDto } from '../dto/InvoiceDto.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class InvoiceService {

private facturas : CreateInvoiceDto[] = [
        {
            "uuid" : uuid(),
            "nombre": "Juan Iturbide",

            "invoice_detail": [
                {
                    "idDetail": "id01",
                    "cantidad": 10,
                    "detail": "Zapato de Goma",
                    "precio": 1000
                }
            ]
        },
        {
            "uuid": uuid(),
            "nombre": "Maria Perez",

            "invoice_detail": [
                {
                    "idDetail": "id02",
                    "cantidad": 5,
                    "detail": "Zapato para dama",
                    "precio": 1200
                }
            ]
        }
];

 getAll(){
    return this.facturas;
} 
////////////////////////

getOne(uuid: string){
    return this.facturas.find(id => id.uuid === uuid);
   
  } 


//////////////////

createFactura(agregar: CreateInvoiceDto) {
    return this.facturas.push(agregar);
  } 

  ////////////////////

deleteFactura(id: string){
 this.facturas = this.facturas.filter(factura => factura.uuid != id )
}


//////////////////////////

updateFactura(uuid : string, updatedFields: UpdateInvoiceDto) {
    const factura = this.getOne(uuid);
    
    if (!factura) {
      throw new Error(`La factura con uuid ${uuid} no existe`);
    }
    
    const newFactura = { ...factura, ...updatedFields };
    
    this.facturas = this.facturas.map(factura=> factura.uuid === uuid ? newFactura : factura);
    
    return newFactura;
  }

  //////////////////////////////////

  putFactura(uuid: string, updatedFields: UpdateInvoiceDto): UpdateInvoiceDto {
    const facturaIndex = this.facturas.findIndex((factura) => factura.uuid === uuid);
  
    if (facturaIndex === -1) {
      throw new Error(`La factura con uuid ${uuid} no existe`);
    }
  
    const facturaToUpdate = { ...this.facturas[facturaIndex] };
    const updatedFactura = { ...facturaToUpdate, ...updatedFields };
    this.facturas[facturaIndex] = updatedFactura;
  
    return updatedFactura;
  }
}