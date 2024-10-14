import { ApiProperty, ApiPropertyOptional, OmitType } from '@nestjs/swagger';
import { IsEmail, IsString, ValidateNested } from 'class-validator';
import { Technology } from '../technologies/technologies.types';

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email?: string;
  technologies: Technology[];
}

export class GetEmployeeResponseDto implements Employee {
  @ApiProperty({
    description: 'Unique alpha id of the employee of 10 letters',
    example: 'ABCDEFGHIJ',
  })
  @IsString()
  id!: string;

  @ApiProperty()
  @IsString()
  firstName!: string;

  @ApiProperty()
  @IsString()
  lastName!: string;

  @ApiPropertyOptional({ example: 'yourname@iodigital.com' })
  @IsEmail()
  email?: string;

  @ApiProperty({
    description: 'any in the database existing technology',
    type: [String],
  })
  @IsString({ each: true })
  technologies!: Technology[];
}

export class EmployeesResponseDto {
  @ApiProperty({ type: [GetEmployeeResponseDto] })
  @ValidateNested({ each: true })
  employees!: GetEmployeeResponseDto[];
}

export type NewEmployee = Omit<Employee, 'id'>;
export class NewEmployeeDto extends OmitType(GetEmployeeResponseDto, ['id']) {}
