import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';
import { Customer } from '../entities/customer.entity';

@Injectable()
export class CustomersService {

    constructor(@InjectRepository(Customer) private customerRepo: Repository<Customer>) {}

    async getAll(): Promise<Customer[]> {
        return await this.customerRepo.find();
    }

    async getOne(id: number): Promise<Customer> {
        const customer = await this.customerRepo.findOneBy({ id });
        if(!customer) {
            throw new NotFoundException(`Customer #${id} not found`);
        }
        return customer;
    }

    async create(data: CreateCustomerDto): Promise<Customer> {
        const newCustomer = this.customerRepo.create(data);
        return await this.customerRepo.save(newCustomer);
    }

    async update(id: number, data: UpdateCustomerDto) {
        const customer = await this.customerRepo.findOneBy({ id });
        this.customerRepo.merge(customer, data);
        return await this.customerRepo.save(customer);
    }

    async delete(id: number) {
        return await this.customerRepo.delete({ id });
    }
}
