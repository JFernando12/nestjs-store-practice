import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { BrandsService } from '../services/brands.service';
import { Brand } from '../entities/brand.entity';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brand.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Brands')
@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Get()
  getBrands(): Promise<Brand[]> {
    return this.brandsService.getAll();
  }

  @Get(':id')
  getBrand(@Param('id', ParseIntPipe) brandId: number): Promise<Brand> {
    return this.brandsService.getOne(brandId);
  }

  @Post()
  createBrand(@Body() body: CreateBrandDto) {
    return this.brandsService.create(body);
  }

  @Put(':id')
  updateBrand(
    @Param('id', ParseIntPipe) brandId: number,
    @Body() body: UpdateBrandDto,
  ) {
    return this.brandsService.update(brandId, body);
  }

  @Delete(':id')
  deleteBrand(@Param('id', ParseIntPipe) brandId: number) {
    return this.brandsService.delete(brandId);
  }
}
