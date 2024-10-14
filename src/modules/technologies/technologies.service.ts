import { Injectable } from '@nestjs/common';
import { TechnologiesRepository } from './technologies.repository';
import {
  NewTechnology,
  TechnologiesResponse,
  Technology,
} from './technologies.types';

@Injectable()
export class TechnologiesService {
  constructor(
    private readonly technogoliesRepository: TechnologiesRepository,
  ) {}

  public async validateTechnologies(technologyIds: string[]): Promise<void> {
    const technologies = await this.getTechnologies();
    technologyIds.forEach((id) => {
      if (!technologies.technologies.find((tech) => tech.id === id)) {
        throw new Error(`TechnologiesService.nonExistingTechnology`);
      }
    });
  }

  public async getTechnologies(): Promise<TechnologiesResponse> {
    return { technologies: await this.technogoliesRepository.getAll() };
  }

  public async addTechnology(technology: NewTechnology): Promise<Technology> {
    return this.technogoliesRepository.addTechnology(technology);
  }

  public async removeTechnology(technologyId: string): Promise<{ id: string }> {
    return this.technogoliesRepository.removeTechnology(technologyId);
  }
}
