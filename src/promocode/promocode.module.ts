import { Module } from '@nestjs/common';
import { PromocodeService } from './promocode.service';
import { PromocodeController } from './promocode.controller';

@Module({
  providers: [PromocodeService],
  controllers: [PromocodeController]
})
export class PromocodeModule {}
