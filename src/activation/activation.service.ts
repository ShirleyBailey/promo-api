import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ActivationService {
  constructor(private prisma: PrismaService) {}

  async activate(code: string, email: string) {
    return this.prisma.$transaction(async (tx) => {
      const promo = await tx.promoCode.findUnique({ where: { code } });
      if (!promo) throw new BadRequestException('Promo code not found');
      if (promo.expiresAt < new Date()) throw new BadRequestException('Promo code expired');
      if (promo.activationCount >= promo.activationLimit)
        throw new BadRequestException('Activation limit exceeded');

      const exists = await tx.activation.findUnique({
        where: { promoCodeId_email: { promoCodeId: promo.id, email } },
      });
      if (exists) throw new BadRequestException('Email already used for this promo');

      await tx.activation.create({ data: { promoCodeId: promo.id, email } });
      await tx.promoCode.update({ where: { id: promo.id }, data: { activationCount: { increment: 1 } } });

      return { success: true };
    });
  }
}