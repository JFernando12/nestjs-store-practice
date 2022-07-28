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

    async create(data: CreateUserDto) {
        const newUser = this.userRepo.create(data);
        return await this.userRepo.save(newUser);
    };

    async update(id: number, data: UpdateUserDto) {
        const user = await this.userRepo.findOneBy({ id });
        this.userRepo.merge(user, data);
        return await this.userRepo.save(user);
    }

    async delete(id: number) {
        return await this.userRepo.delete({ id });
    };

    async getOrderById(id: number): Promise<Order> {
        const user = await this.userRepo.findOneBy({ id });
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
