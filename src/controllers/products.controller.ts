import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ParseIntPipe } from 'src/common/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/product.dtos';
import { ProductsService } from 'src/services/products.service';

@Controller('products')
export class ProductsController {

    constructor(private productsService: ProductsService){}

    @Get()
    getProducts() {
        return this.productsService.findAll();
    }

    @Get(":id")
    getProduct(@Param("id", ParseIntPipe) productId: number ) {
        return this.productsService.findOne(productId);
    }

    @Post()
    createProduct(@Body() body: CreateProductDto) {
        return this.productsService.create(body);
    }

    @Put(":id")
    updateProduct(@Param("id", ParseIntPipe) productId: number, @Body() body: UpdateProductDto) {
        return this.productsService.update(productId, body);
    }

    @Delete(":id")
    deleteProduct(@Param("id", ParseIntPipe) productId: number) {
        return this.productsService.delete(productId);
    }
}
