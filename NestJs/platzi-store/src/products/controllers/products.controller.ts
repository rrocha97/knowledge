import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ProductsService } from '../services/products.service';
import { Products } from 'src/products/entities/products.entity';
import {
  CreateProducts,
  UpdateProducts,
} from 'src/products/dtos/products.dtos';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  getAll(): Products[] {
    return this.productsService.getAll();
  }
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  getOne(@Param('id', ParseIntPipe) id: number): Products {
    return this.productsService.getOne(id);
  }
  @Delete(':id')
  deleteOne(): string {
    return 'hello';
  }
  @Put(':id')
  updateOne(@Body() payload: UpdateProducts): string {
    return 'hello';
  }
  @Post()
  createOne(@Body() payload: CreateProducts): Products {
    return this.productsService.create(payload);
  }
}
