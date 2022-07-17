import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
import { Order } from '../entities/order.entity';
import { User } from '../entities/user.entity';
import { ProductsService } from 'src/products/services/products.service';

@Injectable()
export class UsersService {

    constructor( private productsService: ProductsService ) {}

    private userId = 1;
    private users = [
        {
            id: 1,
            email: "Fernando",
            password: "12334",
            role: "admin"
        }
    ];

    newId() {
        this.userId = this.userId + 1;
    };

    getAll(): User[] {
        return this.users;
    };

    getOne(id: number): User {
        return this.users.find(user => user.id === id);
    };

    create(data: CreateUserDto) {
        this.newId();
        const user = {
            id: this.userId,
            ...data
        }
        this.users.push(user);
        return user;
    };

    update(id: number, data: UpdateUserDto) {
        const userIndex = this.users.findIndex(user => user.id === id);
        const user = this.users[userIndex];
        const newUser = {
            ...user,
            ...data
        }
        this.users[userIndex] = newUser;

        return newUser;
    }

    delete(id: number) {
        this.users = this.users.filter(user => user.id !== id);
        return `User ${id} eliminated`;
    };

    getOrderById(id: number): Order {
        const user = this.getOne(id);
        return {
            date: new Date(),
            user,
            products: this.productsService.findAll()
        };
    }
}
