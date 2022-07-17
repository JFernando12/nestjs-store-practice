import { PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

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