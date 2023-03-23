import * as service from '../../../services/candidate';
import { CandidateDTO, UpdateCandidateDTO } from '../../dto/candidate';
import { ICandidate } from '../../interface/ICandidate';
import * as mapper from './mapper';

export const create = async (payload: CandidateDTO): Promise<ICandidate> => {
  return mapper.toCandidate(await service.create(payload))
}

export const update = async (
  id: number,
  payload: UpdateCandidateDTO
): Promise<ICandidate> => (mapper.toCandidate(await service.update(id, payload)));

export const getById = async (
  id: number
): Promise<ICandidate> => (mapper.toCandidate(await service.getById(id)));

export const deleteById = (
  id: number
): Promise<boolean> => (service.deleteById(id));

export const getAll = async (): Promise<ICandidate[]> => {
  const candidates: ICandidate[] | undefined =
    await service.getAll().then(
      (candidates) => candidates.map(mapper.toCandidate)
    );

  if (!candidates?.length) {
    throw new Error("Not Found");
  }

  return candidates;
}