import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class ActivateDto {
  @ApiProperty()
  @IsEmail()
  email: string;
}