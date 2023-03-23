import * as candidateDal from '../db/dal/candidate';
import { CandidateInput, CandidateOutput } from '../db/models/candidate';


export const create = async (payload: CandidateInput): Promise<CandidateOutput> => (candidateDal.create(payload));

export const getById = async (id: number): Promise<CandidateOutput> => (candidateDal.getById(id));

export const update = async (
  id: number,
  payload: Partial<CandidateInput>
): Promise<CandidateOutput> => (candidateDal.update(id, payload));

export const deleteById = async (id: number): Promise<boolean> => (candidateDal.deleteById(id));

export const getAll = async (): Promise<CandidateOutput[]> => (candidateDal.getAll());