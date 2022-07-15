import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { BrandsService } from '../services/brands.service';

@Controller('brands')
export class BrandsController {
    constructor(private readonly brandsService: BrandsService) {}

    @Get()
    getBrands() {
        return this.brandsService.getAll();
    }

    @Get(":id")
    getBrand(@Param("id", ParseIntPipe) brandId: number) {
        return this.brandsService.getOne(brandId);
    }

    @Post()
    createBrand(@Body() body: any) {
        return this.brandsService.create(body);
    }

    @Put(":id")
    updateBrand(@Param("id", ParseIntPipe) brandId: number, @Body() body: any) {
        return this.brandsService.update(brandId, body);
    }

    @Delete(":id")
    deleteBrand(@Param("id", ParseIntPipe) brandId: number) {
        return this.brandsService.delete(brandId);
    }
}
