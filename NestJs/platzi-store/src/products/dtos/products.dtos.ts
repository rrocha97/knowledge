import { IsString, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/swagger';
export class CreateProducts {
  @IsString()
  readonly name: string;

  @IsNumber()
  readonly stock: number;
}

export class UpdateProducts extends PartialType(CreateProducts) {
  @IsString()
  readonly name?: string;

  @IsNumber()
  readonly stock?: number;
}
