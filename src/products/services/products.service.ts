import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from 'src/products/dtos/product.dto';
import { Product } from '../entities/product.entity';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
    // private productId = 1;
    // private products: Product[] = [{
    //     id: 1,
    //     name: "Lampara",
    //     description: "7 Colores",
    //     price: 598,
    //     stock: 20,
    //     image: ""
    // }]

    constructor(
        @InjectRepository(Product) private productRepo: Repository<Product>
    ){}

    findAll(){
        return this.productRepo.find();
    }
    async findOne(id: number) {
        const product = await this.productRepo.findOneBy({ id: id});
        if(!product) {
            throw new NotFoundException(`Product #${id} not found`)
        }
        return product;
    }

    // constructor(private configService: ConfigService) {}

    // newId() {
    //     this.productId = this.productId + 1;
    // }

    // findAll() {
    //     console.log(this.configService.get("API_KEY"));
    //     console.log(this.configService.get("DATABASE_NAME"));
    //     return this.products;
    // }

    // findOne(id: number) {
    //     const product = this.products.find(product => product.id === id);
    //     if(!product) {
    //         throw new NotFoundException(`Product #${id} not found`);
    //     }
    //     return product;
    // }

    // create(payload: CreateProductDto) {
    //     this.newId();
    //     const newProduct = {
    //         id: this.productId,
    //         ...payload
    //     };
    //     this.products.push(newProduct);
    //     return newProduct;
    // }

    create(data: CreateProductDto) {
        // const newProduct = new Product;
        // newProduct.name = data.name;
        // newProduct.description = data.description;
        // newProduct.price = data.price;
        // newProduct.stock = data.stock;
        // newProduct.image = data.image;
        const newProduct = this.productRepo.create(data);
        return this.productRepo.save(newProduct);
    }

    // update(id: number, payload) {
    //     const index = this.products.findIndex(product => product.id === id);
    //     const product = this.products.find(product => product.id === id);
    //     const newProduct = {
    //         ...product,
    //         ...payload
    //     }
    //     this.products[index] = newProduct;
    //     return newProduct;
    // }

    async update(id: number, payload: UpdateProductDto) {
        const product = await this.productRepo.findOneBy({ id });
        this.productRepo.merge(product, payload);
        return this.productRepo.save(product);
    }

    // delete(id: number) {
    //     this.products = this.products.filter(product => product.id !== id);
    //     return `Producto ${id} eliminado`
    // }

    delete(id: number) {
        return this.productRepo.delete( { id } )
    }

}
