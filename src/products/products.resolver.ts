import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from './products.entity';
import { CreateProductValidator } from './validator/createProduct.validator';

@Resolver()
export class ProductsResolver {
  constructor(private productsService: ProductsService) {}

  @Query(() => [Product])
  products() {
    return this.productsService.findAll();
  }

  @Query(() => Product)
  product(@Args('id', { type: () => Int }) id: number) {
    return this.productsService.findById(id);
  }

  @Mutation(() => Product)
  createProduct(@Args('productInput') product: CreateProductValidator) {
    return this.productsService.createProduct(product);
  }
}
