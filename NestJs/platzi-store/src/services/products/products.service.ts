import { Injectable, NotFoundException } from '@nestjs/common';
import { Products } from 'src/entities/products.entity';
import { CreateProducts } from 'src/dto/products.dto';
@Injectable()
export class ProductsService {
  private counterId = 1;
  private products = [
    {
      id: 1,
      name: 'product 1',
      stock: 1,
    },
  ];

  getAll(): Products[] {
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
  updateOne(id: number, payload: any): Products {
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
