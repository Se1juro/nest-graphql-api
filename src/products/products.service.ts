import { Injectable } from '@nestjs/common';
import { Product } from './entities/products.entity';
import { ProductsRepository } from './products.repository';
import { CreateProductValidator } from './dto/createProduct.validator';
import { ShopsService } from 'src/shops/shops.service';

@Injectable()
export class ProductsService {
  constructor(
    private productsRepository: ProductsRepository,
    private shopService: ShopsService,
  ) {}

  async findAll(): Promise<Product[]> {
    return await this.productsRepository.find();
  }

  async createProduct(product: CreateProductValidator) {
    const newProduct = this.productsRepository.create(product);

    return this.productsRepository.save(newProduct);
  }

  async findById(id: number) {
    const product = await this.productsRepository.findOne({ where: { id } });

    return product;
  }

  async getShop(id: number) {
    return await this.shopService.findById(id);
  }
}
