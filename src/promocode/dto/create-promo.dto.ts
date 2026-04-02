import { IsString, IsInt, Min, Max, IsDateString } from 'class-validator';

export class CreatePromoDto {
  @IsString()
  code: string;

  @IsInt()
  @Min(0)
  @Max(100)
  discount: number;

  @IsInt()
  @Min(1)
  activationLimit: number;

  @IsDateString()
  expiresAt: string;
}