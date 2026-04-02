import { Controller, Post, Body, Param } from '@nestjs/common';
import { ActivationService } from './activation.service';
import { ActivateDto } from './dto/activate.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Activation')
@Controller('promocodes')
export class ActivationController {
  constructor(private service: ActivationService) {}

  @Post(':code/activate')
  activate(@Param('code') code: string, @Body() dto: ActivateDto) {
    return this.service.activate(code, dto.email);
  }
}