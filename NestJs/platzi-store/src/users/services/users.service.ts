import { Injectable, NotFoundException, Inject} from '@nestjs/common';
import { Users } from 'src/users/entities/users.entity';
import { CreateUsers, UpdateUsers } from 'src/users/dtos/users.dto';
import { Orders } from '../entities/orders.entity';
import { ProductsService } from 'src/products/services/products.service';
import { ConfigType } from '@nestjs/config';
import config from '../../../config';

@Injectable()
export class UsersService {
  constructor(
    private productsService: ProductsService,
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}
  private counterId = 1;
  private users = [
    {
      id: 1,
      name: 'rafa',
    },
  ];

  getAll(): Users[] {
    console.log(this.configService.api_key);
    console.log(this.configService.database.name);
    return this.users;
  }
  getOne(id: number): Users {
    const product = this.users.find((product) => product.id === id);
    if (!product) {
      throw new NotFoundException('product not found');
    }
    return product;
  }
  create(payload: CreateUsers): Users {
    this.counterId++;
    const newProduct = { id: this.counterId, ...payload };
    this.users.push(newProduct);
    return newProduct;
  }
  updateOne(id: number, payload: UpdateUsers): Users {
    const product = this.getOne(id);
    const index = this.users.findIndex((product) => product.id === id);
    this.users[index] = { ...payload, ...product };
    return;
  }
  deleteOne(id: number): Users {
    this.getOne(id);
    const index = this.users.findIndex((product) => product.id === id);
    this.users.splice(index);
    return;
  }
  getOrderByuser(id: number): Orders {
    const user = this.getOne(id);
    const order: Orders = {
      date: new Date(),
      user,
      products: this.productsService.getAll(),
    };
    return order;
  }
}
