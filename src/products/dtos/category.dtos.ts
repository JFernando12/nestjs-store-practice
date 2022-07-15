import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCategoryDto {

    @IsNotEmpty()
    @IsString()
    public name: string;
};

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {};