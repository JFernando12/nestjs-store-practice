import { Injectable } from '@nestjs/common';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';
import { Customer } from '../entities/customer.entity';

@Injectable()
export class CustomersService {
    private customerId = 1;
    private customers: Customer[] = [
        {
            id: 1,
            name: "Fernando",
            lastname: "Castrejon",
            phone: "7551155510"
        }
    ]

    newId() {
        this.customerId = this.customerId + 1;
    }

    getAll(): Customer[] {
        return this.customers;
    }

    getOne(id: number): Customer {
        return this.customers.find(customer => customer.id === id);
    }

    create(data: CreateCustomerDto): Customer {
        this.newId();
        const customer = {
            id: this.customerId,
            ...data
        }
        this.customers.push(customer);
        return customer;
    }

    update(id: number, data: UpdateCustomerDto) {
        const customerIndex = this.customers.findIndex(customer => customer.id === id);
        const customer = this.customers[customerIndex];
        const newCustomer = {
            ...customer,
            ...data
        }
        this.customers[customerIndex] = newCustomer;
        return newCustomer;
    }

    delete(id: number) {
        this.customers = this.customers.filter(customer => customer.id !== id);
        return `Customer ${id} eliminated`;
    }
}
