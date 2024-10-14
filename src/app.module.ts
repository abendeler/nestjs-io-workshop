import { Module } from '@nestjs/common';
import { TechnologiesModule } from './modules/technologies/technologies.module';
import { EmployeesModule } from './modules/employees/employees.module';

@Module({
  imports: [EmployeesModule, TechnologiesModule],
})
export class AppModule {}
