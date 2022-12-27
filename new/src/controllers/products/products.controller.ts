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
import { ProductsService } from 'src/services/products/products.service';
import { Products } from 'src/entities/products.entity';
import { CreateProducts } from 'src/dto/products.dto';
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
  updateOne(): string {
    return 'hello';
  }
  @Post()
  createOne(@Body() payload: CreateProducts): Products {
    return this.productsService.create(payload);
  }
}
