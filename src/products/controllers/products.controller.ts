import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ParseIntPipe } from 'src/common/parse-int.pipe';
import {
  CreateProductDto,
  UpdateProductDto,
} from 'src/products/dtos/product.dto';
import { ProductsService } from '../services/products.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.productsService.findAll();
  }

  @Get(':id')
  getProduct(@Param('id', ParseIntPipe) productId: number) {
    return this.productsService.findOne(productId);
  }

  @Post()
  createProduct(@Body() body: CreateProductDto) {
    return this.productsService.create(body);
  }

  @Put(':id')
  updateProduct(
    @Param('id', ParseIntPipe) productId: number,
    @Body() body: UpdateProductDto,
  ) {
    return this.productsService.update(productId, body);
  }

  @Delete(':id')
  deleteProduct(@Param('id', ParseIntPipe) productId: number) {
    return this.productsService.delete(productId);
  }

  @Delete(':id/category/:categoryId')
  deleteCategoryByProduct(
    @Param('id', ParseIntPipe) productId: number,
    @Param('categoryId', ParseIntPipe) categoryId: number,
  ) {
    return this.productsService.deleteCategoryByProduct(productId, categoryId);
  }

  @Put(':id/category/:categoryId')
  addCategoryToProduct(
    @Param('id', ParseIntPipe) productId: number,
    @Param('categoryId', ParseIntPipe) categoryId: number,
  ) {
    return this.productsService.addCategoryToProduct(productId, categoryId);
  }
}
