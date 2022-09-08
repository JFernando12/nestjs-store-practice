import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsUrl,
} from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateProductDto {
  @IsString({ message: 'Todo mal' })
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public description: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  public price: number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  public stock: number;

  @IsUrl()
  @IsNotEmpty()
  public image: string;

  @IsPositive()
  @IsNotEmpty()
  @ApiProperty()
  public brandId: number;

  @IsArray()
  @IsNotEmpty()
  @ApiProperty()
  public categoriesIds: number[];
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
