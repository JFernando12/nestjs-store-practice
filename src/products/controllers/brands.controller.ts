import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { BrandsService } from '../services/brands.service';

@Controller('brands')
export class BrandsController {
    constructor(private readonly brandsService: BrandsService) {}

    @Get()
    getBrands() {
        return "All brands";
    }

    @Get(":id")
    getBrand(@Param("id", ParseIntPipe) brandId: number) {
        return `Brand ${brandId}`;
    }

    @Post()
    createBrand(@Body() body: any) {
        return `${body}`;
    }

    @Put(":id")
    updateBrand(@Param("id", ParseIntPipe) brandId: number, @Body() body: any) {
        return {
            brandId,
            body
        }
    }

    @Delete(":id")
    deleteBrand(@Param("id", ParseIntPipe) brandId: number) {
        return `Brand ${brandId} updated`
    }
}
