import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PromocodeModule } from './promocode/promocode.module';

@Module({
  imports: [PrismaModule, PromocodeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
