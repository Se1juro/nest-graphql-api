import { Injectable } from '@nestjs/common';
import { CreateShopInput } from './dto/create-shop.input';
import { UpdateShopInput } from './dto/update-shop.input';
import { ShopsRepository } from './shops.repository';

@Injectable()
export class ShopsService {
  constructor(private shopRepository: ShopsRepository) {}

  async create(createShopInput: CreateShopInput) {
    const shop = this.shopRepository.create(createShopInput);

    return await this.shopRepository.save(shop);
  }

  async findAll() {
    return await this.shopRepository.find();
  }

  async findById(id: number) {
    return await this.shopRepository.findOne({ where: { id } });
  }

  update(id: number, updateShopInput: UpdateShopInput) {
    return `This action updates a #${id} shop`;
  }

  remove(id: number) {
    return `This action removes a #${id} shop`;
  }
}
