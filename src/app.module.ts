import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { InvoiceController } from './invoice/controller/invoice.controller';
import { InvoiceService } from './invoice/services/invoice.service';
import { CustomerController } from './customer/controller/customer.controller';
import { CustomerService } from './customer/services/customer.service';
import { CustomerModule } from './customer/customer.module';
import { InvoiceModule } from './invoice/invoice.module';
import { MiddlewarePut } from './middleware/middleware';

@Module({
  imports: [CustomerModule, InvoiceModule],
  controllers: [InvoiceController, CustomerController],
  providers: [InvoiceService, CustomerService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      consumer.apply(MiddlewarePut).forRoutes('*');
  }
}
