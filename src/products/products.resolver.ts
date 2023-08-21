import { Query, Resolver } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from './products.entity';

@Resolver()
export class ProductsResolver {
  constructor(private productsService: ProductsService) {}

  @Query(() => [Product])
  products() {
    return this.productsService.findAll();
  }
}
