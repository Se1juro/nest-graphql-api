import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products.entity';
import { ProductsRepository } from './products.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [ProductsService, ProductsRepository, ProductsResolver],
})
export class ProductsModule {}
