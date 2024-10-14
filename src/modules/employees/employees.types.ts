import { Technology } from '../technologies/technologies.types';

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email?: string;
  technologies: Technology[];
}

export type NewEmployee = Omit<Employee, 'id'>;
