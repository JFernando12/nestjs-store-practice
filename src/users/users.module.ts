import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { CustomersService } from './services/customers.service';
import { UsersController } from './controllers/users.controller';
import { CustomersController } from './controllers/customers.controller';

import { ProductsService } from 'src/products/services/products.service';
import { ProductsModule } from 'src/products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/products/entities/product.entity';

@Module({
  imports: [ProductsModule, TypeOrmModule.forFeature([Product])],
  controllers: [UsersController, CustomersController],
  providers: [UsersService, CustomersService, ProductsService]
})
export class UsersModule {}
