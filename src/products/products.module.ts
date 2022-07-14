import { Module } from '@nestjs/common';
import { ProductsService } from './services/products.service';
import { BrandsService } from './services/brands.service';
import { CategoriesService } from './services/categories.service';
import { ProductsController } from './controllers/products.controller';
import { BrandsController } from './controllers/brands.controller';
import { CategoriesController } from './controllers/categories.controller';

@Module({
  controllers: [ProductsController, BrandsController, CategoriesController],
  providers: [ProductsService ,BrandsService, CategoriesService]
})
export class ProductsModule {}
