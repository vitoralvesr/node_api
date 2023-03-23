import Candidate, { CandidateInput, CandidateOutput } from '../models/candidate';

export const create = (payload: CandidateInput): Promise<CandidateOutput> => {
  return Candidate.create(payload);
}

export const update = async (id: number, payload: Partial<CandidateInput>): Promise<CandidateOutput> => {
  const candidate = await Candidate.findByPk(id);

  if (!candidate) {
    throw new Error('not found');
  }

  return candidate.update(payload);
}

export const getById = async (id: number): Promise<CandidateOutput> => {
  const candidate = await Candidate.findByPk(id);

  if (!candidate) {
    throw new Error('not found');
  }

  return candidate;
}

export const deleteById = async (id: number): Promise<boolean> => {
  const numDeletedCandidates = await Candidate.destroy({
    where: { id }
  });

  return !!numDeletedCandidates;
}

export const getAll = async (): Promise<CandidateOutput[]> => {
  return Candidate.findAll();
}
