import * as candidateDao from '../db/dao/candidate';
import { CandidateInput, CandidateOutput } from '../db/models/candidate';
import { AppError, HttpCode } from '../errors/appError';
import CandidateNotFoundError from '../errors/candidateNotFound';

export const create = async (
  payload: CandidateInput
): Promise<CandidateOutput> => {
  let candidate: CandidateOutput;
  try {
    candidate = await candidateDao.create(payload);
  } catch (error) {
    throw new AppError({
      httpCode: HttpCode.INTERNAL_SERVER_ERROR,
      description: 'Internal Server Error',
    });
  }

  return candidate;
};

export const getById = async (id: number): Promise<CandidateOutput> => {
  let candidate: CandidateOutput;
  try {
    candidate = await candidateDao.getById(id);
  } catch (error: any) {
    if (error instanceof CandidateNotFoundError) {
      throw new AppError({
        httpCode: HttpCode.NOT_FOUND,
        description: 'Not found',
      });
    }

    throw new AppError({
      httpCode: HttpCode.INTERNAL_SERVER_ERROR,
      description: 'Internal Server Error',
    });
  }

  return candidate;
};

export const update = async (
  id: number,
  payload: Partial<CandidateInput>
): Promise<CandidateOutput> => {
  let candidate: CandidateOutput;
  try {
    candidate = await candidateDao.update(id, payload);
  } catch (error) {
    if (error instanceof CandidateNotFoundError) {
      throw new AppError({
        httpCode: HttpCode.NOT_FOUND,
        description: 'Not Found',
      });
    }

    throw new AppError({
      httpCode: HttpCode.INTERNAL_SERVER_ERROR,
      description: 'Internal Server Error',
    });
  }

  return candidate;
};

export const deleteById = async (id: number): Promise<boolean> => {
  let deleted = false;
  try {
    deleted = await candidateDao.deleteById(id);
  } catch (error) {
    throw new AppError({
      httpCode: HttpCode.INTERNAL_SERVER_ERROR,
      description: 'Internal Server Error',
    });
  }

  if (!deleted) {
    throw new AppError({
      httpCode: HttpCode.NOT_FOUND,
      description: 'Not Found',
    });
  }

  return deleted;
};

export const getAll = async (): Promise<CandidateOutput[]> => (candidateDao.getAll());