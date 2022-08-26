import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from 'src/products/dtos/product.dto';
import { Product } from '../entities/product.entity';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { BrandsService } from './brands.service';
import { Brand } from '../entities/brand.entity';
import { Category } from '../entities/category.entity';

@Injectable()
export class ProductsService {

    constructor(
        @InjectRepository(Product) private productRepo: Repository<Product>,
        @InjectRepository(Brand) private brandRepo: Repository<Brand>,
        @InjectRepository(Category) private categoryRepo: Repository<Category>
    ){}

    findAll(){
        return this.productRepo.find();
    }
    async findOne(id: number) {
        const product = await this.productRepo.findOne({ 
            where: { id },
            relations: ['brand', 'categories']
        });
        if(!product) {
            throw new NotFoundException(`Product #${id} not found`)
        }
        return product;
    }

    // constructor(private configService: ConfigService) {}

    // findAll() {
    //     console.log(this.configService.get("API_KEY"));
    //     console.log(this.configService.get("DATABASE_NAME"));
    //     return this.products;
    // }


    async create(data: CreateProductDto) {
        const newProduct = this.productRepo.create(data);
        if(data.brandId) {
            const brand = await this.brandRepo.findOneBy({ id: data.brandId });
            newProduct.brand = brand;
        }
        
        if(data.categoriesIds) {
            const categories = await this.categoryRepo.findBy({ id: In(data.categoriesIds) });
            newProduct.categories = categories;
        }

        return this.productRepo.save(newProduct);
    }

    async update(id: number, payload: UpdateProductDto) {
        const product = await this.productRepo.findOneBy({ id });
        this.productRepo.merge(product, payload);
        return this.productRepo.save(product);
    }

    async delete(id: number) {
        return await this.productRepo.delete( { id } )
    }

    async deleteCategoryByProduct(productId: number, categoryId: number) {
        const product = await this.productRepo.findOne({
            where: {
                id: productId
            },
            relations: ['categories']
        });

        product.categories = product.categories.filter((category) => category.id !== categoryId);
        this.productRepo.save(product);

        return product;
    }

    async addCategoryToProduct(productId: number, categoryId: number) {
        const product = await this.productRepo.findOne({
            where: { id: productId },
            relations: ['categories']
        });
        const category = await this.categoryRepo.findOne({ where: { id: categoryId} });
        product.categories.push(category);
        this.productRepo.save(product);

        return product;
    }
}
