import { Module } from '@nestjs/common';
import { ShopsService } from './shops.service';
import { ShopsResolver } from './shops.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shop } from './entities/shop.entity';
import { ShopsRepository } from './shops.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Shop])],
  providers: [ShopsResolver, ShopsService, ShopsRepository],
  exports: [ShopsService],
})
export class ShopsModule {}
