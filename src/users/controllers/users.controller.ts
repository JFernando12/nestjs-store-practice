import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dtos';
import { User } from '../entities/user.entity';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Get()
    getUsers(): User[] {
        return this.usersService.getAll();
    }

    @Get(":id")
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

}
