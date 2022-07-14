import { Injectable } from '@nestjs/common';

@Injectable()
export class BrandsService {
    private brandId = 1;
    private brands = [
        {
            id: 1,
            name: "Brand 1",
            iamge: "https://algo.png"
        }
    ]

    newID() {
        this.brandId = this.brandId + 1;
    }

    getAll() {
        return this.brands;
    }

    getOne(id: number) {
        return this.brands.find(brand => brand.id === id);
    };

    create(data: any) {
        this.newID();
        const brand = {
            id: this.brandId,
            ...data
        };

        return brand;
    };

    update(id: number, data: any) {
        const indexBrand = this.brands.findIndex(brand => brand.id === id);
        
    };

    delete(id: number) {
        this.brands = this.brands.filter(brand => brand.id !== id);
        return this.brands;
    }

}
