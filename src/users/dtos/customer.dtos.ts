import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";

export class CreateCustomerDto {

    @IsNotEmpty()
    @IsString()
    public name: string;

    @IsNotEmpty()
    @IsString()
    public lastname: string;

    @IsNotEmpty()
    public phone: string;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}