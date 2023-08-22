import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Shop } from './entities/shop.entity';

@Injectable()
export class ShopsRepository extends Repository<Shop> {
  constructor(private dataSource: DataSource) {
    super(Shop, dataSource.createEntityManager());
  }
}
