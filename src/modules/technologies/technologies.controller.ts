import { Body, Controller, Get, Param } from '@nestjs/common';
import { TechnologiesService } from './technologies.service';
import {
  TechnologiesResponseDto,
  NewTechnologyDto,
  TechnologyDto,
} from './technologies.types';
import { IdDto } from 'src/shared/dtos/id-response.model.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Technologies')
@Controller('technologies')
export class TechnologiesController {
  constructor(private readonly technologiesService: TechnologiesService) {}

  @Get()
  public async getTechnologies(): Promise<TechnologiesResponseDto> {
    return this.technologiesService.getTechnologies();
  }

  public async addTechnology(
    @Body() technology: NewTechnologyDto,
  ): Promise<TechnologyDto> {
    return this.technologiesService.addTechnology(technology);
  }

  public async removeTechnology(@Param() { id }: IdDto): Promise<IdDto> {
    return this.technologiesService.removeTechnology(id);
  }
}
