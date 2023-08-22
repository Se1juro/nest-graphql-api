import { Injectable } from '@nestjs/common';
import { Product } from './entities/products.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class ProductsRepository extends Repository<Product> {
  constructor(private dataSource: DataSource) {
    super(Product, dataSource.createEntityManager());
  }
}
