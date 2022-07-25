import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
import { Order } from '../entities/order.entity';
import { User } from '../entities/user.entity';
import { ProductsService } from 'src/products/services/products.service';
import { Client } from 'pg';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

    constructor( 
        private productsService: ProductsService,
        @Inject('PG') private clientPg: Client,
        @InjectRepository(User) private userRepo: Repository<User>
        ) {}

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

    async getAll(): Promise<User[]> {
        return await this.userRepo.find();
    };

    async getOne(id: number): Promise<User> {
        const user = await this.userRepo.findOneBy({ id });
        if(!user) {
            throw new NotFoundException(`User #${id} not found`);
        }
        return user;
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

    async getOrderById(id: number): Promise<Order> {
        const user = this.userRepo.findOneBy({ id });
        return {
            date: new Date(),
            user,
            products: await this.productsService.findAll()
        };
    }

    getTasks(): any {
        return new Promise((resolve, reject) => {
            this.clientPg.query('SELECT * FROM tasks', (err, res) => {
                (err)
                ? reject(err)
                : resolve(res.rows);
            })
        })
    }
}
