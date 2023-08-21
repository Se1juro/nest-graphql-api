import { Injectable } from '@nestjs/common';
import { Product } from './products.entity';

@Injectable()
export class ProductsService {
  findAll(): Product[] {
    return [
      {
        id: 1,
        description: 'Hello',
        quantity: 33,
        title: 'Test',
        unityPrice: 5000,
      },
    ];
  }
}
