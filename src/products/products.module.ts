import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/products.entity';
import { ProductsRepository } from './products.repository';
import { ShopsModule } from 'src/shops/shops.module';

@Module({
  imports: [TypeOrmModule.forFeature([Product]), ShopsModule],
  providers: [ProductsService, ProductsRepository, ProductsResolver],
})
export class ProductsModule {}
