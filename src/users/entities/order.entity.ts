import { Product } from 'src/products/entities/product.entity';
import { User } from './user.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  date: Date;

  @Column({ type: 'varchar' })
  user: User;

  products: Product[];
}
