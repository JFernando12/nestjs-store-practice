import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from 'src/dtos/product.dtos';
import { Product } from '../../src/entities/product.entity';

@Injectable()
export class ProductsService {
    private productId = 1;
    private products: Product[] = [{
        id: 1,
        name: "Lampara",
        description: "7 Colores",
        price: 598,
        stock: 20,
        image: ""
    }]

    newId() {
        this.productId = this.productId + 1;
    }

    findAll() {
        return this.products;
    }

    findOne(id: number) {
        const product = this.products.find(product => product.id === id);
        if(!product) {
            throw new NotFoundException(`Product #${id} not found`);
        }
        return product;
    }

    create(payload: CreateProductDto) {
        this.newId();
        const newProduct = {
            id: this.productId,
            ...payload
        };
        this.products.push(newProduct);
        return newProduct;
    }

    update(id: number, payload) {
        const index = this.products.findIndex(product => product.id === id);
        const product = this.products.find(product => product.id === id);
        const newProduct = {
            ...product,
            ...payload
        }
        this.products[index] = newProduct;
        return newProduct;
    }

    delete(id: number) {
        this.products = this.products.filter(product => product.id !== id);
        return `Producto ${id} eliminado`
    }

}
