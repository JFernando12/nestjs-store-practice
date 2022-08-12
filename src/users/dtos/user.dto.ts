import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsPositive, IsString } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty()
    @IsEmail()
    public email: string;
    
    @IsNotEmpty()
    @IsString()
    public password: string;

    @IsNotEmpty()
    @IsString()
    public role: string;

    @IsOptional()
    @IsPositive()
    @ApiProperty()
    public customerId: number;
};

export class UpdateUserDto extends PartialType(CreateUserDto) {};