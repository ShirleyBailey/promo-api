import { IsEmail } from 'class-validator';

export class ActivateDto {
  @IsEmail()
  email: string;
}