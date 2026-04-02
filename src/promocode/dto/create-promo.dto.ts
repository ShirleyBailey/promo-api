import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, Min, Max, IsDateString } from 'class-validator';

export class CreatePromoDto {
  @ApiProperty()
  @IsString()
  code: string;

  @ApiProperty()
  @IsInt()
  @Min(0)
  @Max(100)
  discount: number;

  @ApiProperty()
  @IsInt()
  @Min(1)
  activationLimit: number;

  @ApiProperty()
  @IsDateString()
  expiresAt: string;
}