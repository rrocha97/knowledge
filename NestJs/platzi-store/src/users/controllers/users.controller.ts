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

import { UsersService } from '../services/users.service';
import { Users } from 'src/users/entities/users.entity';
import { CreateUsers, UpdateUsers } from 'src/users/dtos/users.dto';
import { Orders } from '../entities/orders.entity';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  getAll(): Users[] {
    return this.usersService.getAll();
  }
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  getOne(@Param('id', ParseIntPipe) id: number): Users {
    return this.usersService.getOne(id);
  }
  @Delete(':id')
  deleteOne(): string {
    return 'hello';
  }
  @Put(':id')
  updateOne(@Body() payload: UpdateUsers): string {
    return 'hello';
  }
  @Post()
  createOne(@Body() payload: CreateUsers): Users {
    return this.usersService.create(payload);
  }
  @Get(':id/orders')
  @HttpCode(HttpStatus.OK)
  getOrderByuser(@Param('id', ParseIntPipe) id: number): Orders {
    return this.usersService.getOrderByuser(id);
  }
}
