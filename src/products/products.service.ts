import { Injectable } from '@nestjs/common';
import { Product } from './products.entity';
import { ProductsRepository } from './products.repository';
import { CreateProductValidator } from './validator/createProduct.validator';

@Injectable()
export class ProductsService {
  constructor(private productsRepository: ProductsRepository) {}
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
}
