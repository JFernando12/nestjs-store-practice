import { Injectable } from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/category.dtos';
import { Category } from '../entities/category.entity';

@Injectable()
export class CategoriesService {
    private categoryId = 1;
    private categories = [
        {
            id: 1,   
            name: "Categorie 1"
        }
    ];

    newId() {
        this.categoryId = this.categoryId + 1;
    };

    getAll(): Category[] {
        return this.categories;
    };

    getOne(id: number): Category {
        return this.categories.find(categorie => categorie.id === id);
    };

    create(data: CreateCategoryDto): Category {
        this.newId();
        const categorie = {
            id: this.categoryId,
            ...data
        }
        this.categories.push(categorie);

        return categorie;
    };

    update(id: number, data: UpdateCategoryDto): Category {
        const categorieIndex = this.categories.findIndex(categorie => categorie.id === id);
        const categorie = this.categories[categorieIndex];
        const newCategorie = {
            ...categorie,
            ...data
        }
        this.categories[categorieIndex] = newCategorie;
        return newCategorie;
    }

    delete(id: number) {
        return this.categories.filter(categorie => categorie.id !== id);
    }
}
