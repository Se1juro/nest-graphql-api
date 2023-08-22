import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Product } from 'src/products/entities/products.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'shop' })
export class Shop {
  @Field(() => Int)
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Field()
  @Column({ name: 'name', type: 'text' })
  name: string;

  @Field()
  @Column({ name: 'address' })
  address: string;

  @OneToMany(() => Product, (product) => product.shop)
  @Field(() => [Product])
  products: Product[];
}
