import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PromocodeModule } from './promocode/promocode.module';
import { ActivationModule } from './activation/activation.module';

@Module({
  imports: [PrismaModule, PromocodeModule, ActivationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
