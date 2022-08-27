import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SubwayRepository } from './subway-repository';
import { SubwayController } from './subway.controller';
import { SubwayService } from './subway.service';

@Module({
  imports: [TypeOrmModule.forFeature([SubwayRepository])],
  controllers: [SubwayController],
  providers: [SubwayService],
  exports: [SubwayService],
})
export class SubwayModule {}
