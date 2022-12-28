import { IsString } from 'class-validator';
import { PartialType } from '@nestjs/swagger';
export class CreateUsers {
  @IsString()
  readonly name: string;
}

export class UpdateUsers extends PartialType(CreateUsers) {
  @IsString()
  readonly name?: string;
}
