import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsPositive, IsString, Min } from 'class-validator';

@InputType()
export class CreateProductValidator {
  @IsString()
  @Field()
  title: string;

  @IsString()
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
