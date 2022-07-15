import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateCustomerDto } from '../dtos/customer.dtos';
import { Customer } from '../entities/customer.entity';
import { CustomersService } from '../services/customers.service';

@Controller('customers')
export class CustomersController {
    constructor(private customersService: CustomersService) {}

    @Get()
    getCustomers(): Customer[] {
        return this.customersService.getAll();
    }

    @Get(":id")
    getCustomer(@Param("id", ParseIntPipe) customerId: number): Customer {
        return this.customersService.getOne(customerId);
    }

    @Post()
    createCustomer(@Body() body: CreateCustomerDto): Customer {
        return this.customersService.create(body);
    }

    @Put(":id")
    updateCustomer(@Param("id", ParseIntPipe) customerId: number, @Body() body: any): Customer {
        return this.customersService.update(customerId, body);
    }

    @Delete(":id")
    deleteCustomer(@Param("id", ParseIntPipe) customerId: number) {
        return this.customersService.delete(customerId);
    }
}
