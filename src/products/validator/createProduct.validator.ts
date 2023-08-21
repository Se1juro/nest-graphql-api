import { Field, InputType } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';

@InputType()
export class CreateProductValidator {
  @IsString()
  @IsNotEmpty()
  @Field()
  title: string;

  @IsString()
  @IsNotEmpty()
  @Field()
  description: string;

  @IsNumber()
  @Min(0)
  @Field()
  quantity: number;

  @IsNumber()
  @IsPositive()
  @Field()
  unityPrice: number;
}
