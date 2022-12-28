import { Module } from '@nestjs/common';
import { ProductsModule } from 'src/products/products.module';
import { UsersController } from './controllers/users.controller';
import { CustomerController } from './controllers/customers.controller';
import { UsersService } from './services/users.service';
import { CustomersService } from './services/customers.service';

@Module({
  imports: [ProductsModule],
  controllers: [UsersController, CustomerController],
  providers: [UsersService, CustomersService],
})
export class UsersModule {}
