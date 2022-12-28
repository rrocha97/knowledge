import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { Products } from 'src/products/entities/products.entity';
import { CreateProducts, UpdateProducts } from 'src/products/dtos/products.dtos';
import config from 'config';
import { ConfigType } from '@nestjs/config';
@Injectable()
export class ProductsService {
  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}
  private counterId = 1;
  private products = [
    {
      id: 1,
      name: 'product 1',
      stock: 1,
    },
  ];

  getAll(): Products[] {
    console.log(this.configService.api_key);
    console.log(this.configService.database.name);
    return this.products;
  }
  getOne(id: number): Products {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new NotFoundException('product not found');
    }
    return product;
  }
  create(payload: CreateProducts): Products {
    this.counterId++;
    const newProduct = { id: this.counterId, ...payload };
    this.products.push(newProduct);
    return newProduct;
  }
  updateOne(id: number, payload: UpdateProducts): Products {
    const product = this.getOne(id);
    const index = this.products.findIndex((product) => product.id === id);
    this.products[index] = { ...payload, ...product };
    return;
  }
  deleteOne(id: number): Products {
    this.getOne(id);
    const index = this.products.findIndex((product) => product.id === id);
    this.products.splice(index);
    return;
  }
}
