import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import {
  Technology,
  TechnologiesResponse,
  NewTechnology,
} from './technologies.types';

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

export class TechnologiesResponseDto implements TechnologiesResponse {
  @ApiProperty({ description: 'List of technologies' })
  technologies!: TechnologyDto[];
}

export class NewTechnologyDto implements NewTechnology {
  @ApiProperty({ description: 'Unique name of the technology' })
  @IsString()
  name!: string;
}
