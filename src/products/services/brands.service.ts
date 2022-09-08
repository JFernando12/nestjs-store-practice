import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brand.dto';
import { Brand } from '../entities/brand.entity';

@Injectable()
export class BrandsService {
  constructor(@InjectRepository(Brand) private brandRepo: Repository<Brand>) {}

  async getAll(): Promise<Brand[]> {
    return await this.brandRepo.find();
  }

  async getOne(id: number): Promise<Brand> {
    const brand = await this.brandRepo.findOne({
      where: { id },
      relations: ['products'],
    });
    if (!brand) {
      throw new NotFoundException(`Brand #${id} not found`);
    }
    return brand;
  }

  async create(data: CreateBrandDto) {
    const newBrand = this.brandRepo.create(data);
    return await this.brandRepo.save(newBrand);
  }

  async update(id: number, data: UpdateBrandDto) {
    const brand = await this.brandRepo.findOneBy({ id });
    this.brandRepo.merge(brand, data);
    return await this.brandRepo.save(brand);
  }

  async delete(id: number) {
    return await this.brandRepo.delete({ id });
  }
}
