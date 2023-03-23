import { Optional } from 'sequelize/types';

export type CandidateDTO = {
  name: string;
  gender: string;
  birthdate: string;
  cpf: string;
  nationality: string;
  resume: string;
}

export type UpdateCandidateDTO = Optional<CandidateDTO, 'name' | 'gender' | 'birthdate' | 'cpf' | 'nationality'>