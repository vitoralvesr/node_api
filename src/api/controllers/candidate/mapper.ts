import { CandidateOutput } from "../../../db/models/candidate";
import { ICandidate } from "../../interface/ICandidate";

export const toCandidate = (candidate: CandidateOutput): ICandidate => ({
  id: candidate.id,
  name: candidate.name,
  gender: candidate.gender,
  birthdate: candidate.birthdate,
  cpf: candidate.cpf,
  nationality: candidate.nationality,
  resume: candidate.resume,
  createdAt: candidate.createdAt,
  updatedAt: candidate.updatedAt,
})