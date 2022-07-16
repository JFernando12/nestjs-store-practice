import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { CustomersService } from './services/customers.service';
import { UsersController } from './controllers/users.controller';
import { CustomersController } from './controllers/customers.controller';

import { ProductsService } from 'src/products/services/products.service';

@Module({
  controllers: [UsersController, CustomersController],
  providers: [UsersService, CustomersService, ProductsService]
})
export class UsersModule {}
