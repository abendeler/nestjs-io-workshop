import { Body, Controller, Get, Param } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import {
  GetEmployeeResponseDto,
  EmployeesResponseDto,
  NewEmployeeDto,
} from './employees.dtos';
import { IdDto } from 'src/shared/dtos';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Employees')
@Controller('employees')
export class EmployeesController {
  constructor(private readonly service: EmployeesService) {}

  @Get()
  @ApiOkResponse({ type: EmployeesResponseDto })
  public async getEmployees(): Promise<EmployeesResponseDto> {
    return this.service.getEmployees();
  }

  public async addEmployee(
    @Body() employee: NewEmployeeDto,
  ): Promise<GetEmployeeResponseDto> {
    return this.service.addEmployee(employee);
  }

  public async removeEmployee(@Param() { id }: IdDto): Promise<IdDto> {
    return this.service.removeEmployee(id);
  }
}
