import { Module } from '@nestjs/common';
import { TechnologiesModule } from '../technologies/technologies.module';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { EmployeesRepository } from './employees.repository';

@Module({
  imports: [TechnologiesModule],
  providers: [EmployeesService, EmployeesRepository],
  controllers: [EmployeesController],
})
export class EmployeesModule {}
