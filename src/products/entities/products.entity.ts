import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Shop } from 'src/shops/entities/shop.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'products' })
export class Product {
  @Field(() => Int)
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Field()
  @Column({ name: 'title', type: 'text' })
  title: string;

  @Field()
  @Column({ name: 'description', type: 'text' })
  description: string;

  @Field()
  @Column({ name: 'quantity', type: 'int' })
  quantity: number;

  @Field()
  @Column({ name: 'unity_price', type: 'int' })
  unityPrice: number;

  @Field()
  @Column({ name: 'shop_id', type: 'int', nullable: true })
  shopId: number | null;

  @ManyToOne(() => Shop, (shop) => shop.products)
  @JoinColumn([{ name: 'shop_id', referencedColumnName: 'id' }])
  @Field(() => Shop)
  shop: Shop;
}
