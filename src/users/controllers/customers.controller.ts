import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';
import { Customer } from '../entities/customer.entity';
import { CustomersService } from '../services/customers.service';

@ApiTags("Customers")
@Controller('customers')
export class CustomersController {
    constructor(private customersService: CustomersService) {}

    @Get()
    getCustomers(): Promise<Customer[]> {
        return this.customersService.getAll();
    }

    @Get(":id")
    getCustomer(@Param("id", ParseIntPipe) customerId: number): Promise<Customer> {
        return this.customersService.getOne(customerId);
    }

    @Post()
    createCustomer(@Body() body: CreateCustomerDto): Promise<Customer> {
        return this.customersService.create(body);
    }

    @Put(":id")
    updateCustomer(@Param("id", ParseIntPipe) customerId: number, @Body() body: UpdateCustomerDto) {
        return this.customersService.update(customerId, body);
    }

    @Delete(":id")
    deleteCustomer(@Param("id", ParseIntPipe) customerId: number) {
        return this.customersService.delete(customerId);
    }
}
