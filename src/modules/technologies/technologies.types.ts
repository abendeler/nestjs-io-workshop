import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export interface Technology {
  id: string;
  name: string;
}

export interface TechnologiesResponse {
  technologies: Technology[];
}

export type NewTechnology = Omit<Technology, 'id'>;

export class TechnologyDto implements Technology {
  @ApiProperty({
    description: 'Unique alpha id of the technology of 10 letters',
    example: 'ABCDEFGHIJ',
  })
  @IsString()
  id!: string;

  @ApiProperty({ description: 'Unique name of the technology' })
  @IsString()
  name!: string;
}

export class TechnologiesResponseDto {
  @ApiProperty({ description: 'List of technologies' })
  technologies!: TechnologyDto[];
}

export class NewTechnologyDto implements NewTechnology {
  @ApiProperty({ description: 'Unique name of the technology' })
  @IsString()
  name!: string;
}
