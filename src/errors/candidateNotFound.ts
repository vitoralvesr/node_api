export default class CandidateNotFoundError extends Error {
  constructor() {
    super('Candidate not found');

    Object.setPrototypeOf(this, CandidateNotFoundError.prototype);
  }
}