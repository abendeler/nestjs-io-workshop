import { Injectable } from '@nestjs/common';
import { TechnologiesService } from '../technologies/technologies.service';
import { EmployeesRepository } from './employees.repository';
import { Employee, NewEmployee } from './employees.types';

@Injectable()
export class EmployeesService {
  constructor(
    private readonly employeesRepository: EmployeesRepository,
    private readonly technologiesService: TechnologiesService,
  ) {}

  public async getEmployees(): Promise<{ employees: Employee[] }> {
    return {
      employees: await this.employeesRepository.getEmployees(),
    };
  }

  public async addEmployee(employee: NewEmployee): Promise<Employee> {
    const techIds = employee.technologies.map(({ id }) => id);
    await this.technologiesService.validateTechnologies(techIds);
    return this.employeesRepository.addEmployee(employee);
  }

  public async removeEmployee(employeeId: string): Promise<{ id: string }> {
    return this.employeesRepository.removeEmployee(employeeId);
  }
}
