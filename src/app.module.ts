import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { typeORMConfig } from '../config/typeorm.config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubwayModule } from './subway/subway.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SubwayModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
