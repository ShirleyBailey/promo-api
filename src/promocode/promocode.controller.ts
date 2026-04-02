import { Controller, Post, Get, Body } from '@nestjs/common';
import { PromocodeService } from './promocode.service';
import { CreatePromoDto } from './dto/create-promo.dto';

@Controller('promocodes')
export class PromocodeController {
  constructor(private service: PromocodeService) {}

  @Post()
  create(@Body() dto: CreatePromoDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}