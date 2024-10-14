import { Module } from '@nestjs/common';
import { TechnologiesController } from './technologies.controller';
import { TechnologiesRepository } from './technologies.repository';
import { TechnologiesService } from './technologies.service';

@Module({
  imports: [],
  controllers: [TechnologiesController],
  providers: [TechnologiesRepository, TechnologiesService],
  exports: [TechnologiesService],
})
export class TechnologiesModule {}
