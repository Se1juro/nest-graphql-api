import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from './entities/products.entity';
import { CreateProductValidator } from './dto/createProduct.validator';
import { Shop } from 'src/shops/entities/shop.entity';

@Resolver(() => Product)
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

  @ResolveField(() => Shop)
  shop(@Parent() product: Product) {
    return this.productsService.getShop(product.id);
  }

  @Mutation(() => Product)
  createProduct(@Args('productInput') product: CreateProductValidator) {
    return this.productsService.createProduct(product);
  }
}
