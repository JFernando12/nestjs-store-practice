import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/category.dto';
import { Category } from '../entities/category.entity';

@Injectable()
export class CategoriesService {

    constructor(@InjectRepository(Category) private categoryRepo: Repository<Category>) {}

    async getAll(): Promise<Category[]> {
        return await this.categoryRepo.find();
    };

    async getOne(id: number): Promise<Category> {
        const category = await this.categoryRepo.findOneBy({ id });
        if(!category) {
            throw new NotFoundException(`Category #${id} not found`)
        }
        return category;
    };

    async create(data: CreateCategoryDto): Promise<Category> {
        const newCategory = this.categoryRepo.create(data);
        return await this.categoryRepo.save(newCategory);
    };

    async update(id: number, data: UpdateCategoryDto): Promise<Category> {
        const product = await this.categoryRepo.findOneBy({ id });
        this.categoryRepo.merge(product, data);
        return await this.categoryRepo.save(product);
    }

    async delete(id: number) {
        return await this.categoryRepo.delete({ id });
    }
}
