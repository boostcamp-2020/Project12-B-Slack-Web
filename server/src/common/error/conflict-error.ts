import HttpStatusCode from '@constants/http-status-code';

class ConflictError extends Error {
  status: number;

  constructor() {
    super('Conflict');
    this.status = HttpStatusCode.CONFLICT;
  }
}

export default ConflictError;
