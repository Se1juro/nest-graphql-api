import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
