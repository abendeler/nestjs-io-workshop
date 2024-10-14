import { Injectable } from '@nestjs/common';
import { NewTechnology, Technology } from './technologies.types';
import { randomAlphaIdGenerator } from 'src/utils/random-alpha-id-generator.util';

@Injectable()
export class TechnologiesRepository {
  private readonly technologies: Technology[] = [];

  public async getAll(): Promise<Technology[]> {
    return this.technologies;
  }

  public async getTechnology(technologyId: string): Promise<Technology> {
    const technology = this.technologies.find((t) => t.name === technologyId);
    if (!technology) {
      throw new Error('TechnologiesRepository.resourceNotFound');
    }
    return Promise.resolve(technology);
  }

  public async addTechnology(technology: NewTechnology): Promise<Technology> {
    if (this.technologies.find((t) => t.name === technology.name)) {
      throw new Error('TechnologiesRepository.resourceAlreadyExists');
    }
    const newTechnology = { ...technology, id: this.createNewId() };
    this.technologies.push(newTechnology);
    return Promise.resolve(newTechnology);
  }

  public async removeTechnology(technologyId: string): Promise<{ id: string }> {
    const index = this.technologies.findIndex((t) => t.name === technologyId);
    if (index === -1) {
      throw new Error('TechnologiesRepository.resourceNotFound');
    }
    this.technologies.splice(index, 1);
    return Promise.resolve({ id: technologyId });
  }

  private createNewId(): string {
    let id = randomAlphaIdGenerator();
    while (this.technologies.map((e) => e.id).find((e) => e === id)) {
      id = randomAlphaIdGenerator();
    }
    return id;
  }
}
