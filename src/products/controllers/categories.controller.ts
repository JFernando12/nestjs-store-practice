import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/category.dtos';
import { Category } from '../entities/category.entity';
import { CategoriesService } from '../services/categories.service';

@Controller('categories')
export class CategoriesController {

    constructor(private categoriesService: CategoriesService) {}

    @Get()
    getCategories(): Category[] {
        return this.categoriesService.getAll();
    }

    @Get(":id")
    getCategory(@Param("id", ParseIntPipe) categoryId: number): Category {
        return this.categoriesService.getOne(categoryId);
    }

    @Post()
    createCategory(@Body() body: CreateCategoryDto) {
        return this.categoriesService.create(body);
    }

    @Put(":id")
    updateCategory(@Param("id", ParseIntPipe) categoryId: number, @Body() body: UpdateCategoryDto) {
        return this.categoriesService.update(categoryId, body);
    }

    @Delete(":id")
    deleteCategory(@Param("id", ParseIntPipe) categoryId) {
        return this.categoriesService.delete(categoryId);
    }
}
