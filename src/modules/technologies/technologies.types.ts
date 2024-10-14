export interface Technology {
  id: string;
  name: string;
}

export type NewTechnology = Omit<Technology, 'id'>;

export interface TechnologiesResponse {
  technologies: Technology[];
}
