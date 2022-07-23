import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
import { User } from '../entities/user.entity';
import { UsersService } from '../services/users.service';

@ApiTags("Users")
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Get()
    @ApiOperation({summary: "Get all user"})
    getUsers(): User[] {
        return this.usersService.getAll();
    }

    @Get(":id")
    @ApiOperation({summary: "Create new user"})
    getUser(@Param("id", ParseIntPipe) userId: number): User {
        return this.usersService.getOne(userId);
    }

    @Post()
    createUser(@Body() body: CreateUserDto) {
        return this.usersService.create(body);
    }

    @Put(":id")
    updateUser(@Param("id", ParseIntPipe) userId: number, @Body() body: UpdateUserDto) {
        return this.usersService.update(userId, body);
    }

    @Delete(":id")
    deleteUser(@Param("id", ParseIntPipe) userId: number) {
        return this.usersService.delete(userId);
    }

    @Get(":id/order")
    getOrder(@Param("id", ParseIntPipe) userId: number) {
        return this.usersService.getOrderById(userId);
    }

}
