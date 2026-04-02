import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePromoDto } from './dto/create-promo.dto';

@Injectable()
export class PromocodeService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreatePromoDto) {
    return this.prisma.promoCode.create({
      data: {
        ...dto,
        expiresAt: new Date(dto.expiresAt),
      },
    });
  }

  findAll() {
    return this.prisma.promoCode.findMany();
  }
}