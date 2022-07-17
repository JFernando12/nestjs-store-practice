import { PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsUrl } from "class-validator";

export class CreateBrandDto {

    @IsNotEmpty()
    @IsString()
    public name: string;

    @IsNotEmpty()
    @IsUrl()
    public image: string;
}

export class UpdateBrandDto extends PartialType(CreateBrandDto) {}