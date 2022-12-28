import { Products } from 'src/products/entities/products.entity';
import { Users } from './users.entity';

export class Orders {
  date: Date;
  user: Users;
  products: Products[];
}
