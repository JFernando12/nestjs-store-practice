import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';
import { ProductsService } from 'src/services/products.service';

@Controller('products')
export class ProductsController {

    constructor(private productsService: ProductsService){}

    @Get()
    getProducts() {
        return this.productsService.findAll();
    }

    @Get(":id")
    getProduct(@Param("id") productId: string ) {
        return this.productsService.findOne(+productId);
    }

    @Post()
    createProduct(@Body() body: Product) {
        return this.productsService.create(body);
    }

    @Put(":id")
    updateProduct(@Param("id") productId:string, @Body() body: any) {
        return this.productsService.update(+productId, body);
    }

    @Delete(":id")
    deleteProduct(@Param("id") productId:string) {
        return this.productsService.delete(+productId);
    }
}
