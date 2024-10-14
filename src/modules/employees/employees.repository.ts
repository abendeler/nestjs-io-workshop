import { Injectable } from '@nestjs/common';
import { Employee, NewEmployee } from './employees.types';
import { randomAlphaIdGenerator } from 'src/utils/random-alpha-id-generator.util';

@Injectable()
export class EmployeesRepository {
  private employees: Employee[] = [];

  public async getEmployees(): Promise<Employee[]> {
    return Promise.resolve(this.employees);
  }

  public async addEmployee(employee: NewEmployee): Promise<Employee> {
    this.validateEmployee(employee);
    const newEmployee = { ...employee, id: this.createNewId() };
    this.employees.push(newEmployee);
    return Promise.resolve(newEmployee);
  }

  public async removeEmployee(employeeId: string): Promise<{ id: string }> {
    const index = this.employees.findIndex((t) => t.id === employeeId);
    if (index === -1) {
      throw new Error('EmployeesRepository.resourceNotFound');
    }
    this.employees.splice(index, 1);
    return Promise.resolve({ id: employeeId });
  }

  private validateEmployee({ lastName, firstName }: NewEmployee): void {
    const existingEmployee = this.employees.find((e) => {
      const matchingLastName = e.lastName === lastName;
      const matchingFirstName = e.firstName === firstName;
      return matchingLastName && matchingFirstName;
    });
    if (existingEmployee) {
      throw new Error('TechnologiesRepository.resourceAlreadyExists');
    }
  }

  private createNewId(): string {
    let id = randomAlphaIdGenerator();
    while (this.employees.map((e) => e.id).find((e) => e === id)) {
      id = randomAlphaIdGenerator();
    }
    return id;
  }
}
