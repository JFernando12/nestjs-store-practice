import { Injectable } from '@nestjs/common';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brand.dtos';
import { Brand } from '../entities/brand.entity';

@Injectable()
export class BrandsService {
    private brandId: number = 1;
    private brands: Brand[] = [
        {
            id: 1,
            name: "Brand 1",
            image: "https://algo.png"
        }
    ]

    newID() {
        this.brandId = this.brandId + 1;
    }

    getAll(): Brand[] {
        return this.brands;
    }

    getOne(id: number): Brand {
        return this.brands.find(brand => brand.id === id);
    };

    create(data: CreateBrandDto) {
        this.newID();
        const brand = {
            id: this.brandId,
            ...data
        };
        this.brands.push(brand);
        return brand;
    };

    update(id: number, data: UpdateBrandDto) {
        const indexBrand = this.brands.findIndex(brand => brand.id === id);
        const brand = this.brands[indexBrand];
        const updatedBrand = {
            ...brand,
            ...data
        }
        this.brands[indexBrand] = updatedBrand;
        return this.brands[indexBrand];
    };

    delete(id: number) {
        this.brands = this.brands.filter(brand => brand.id !== id);
        return this.brands;
    }

}
