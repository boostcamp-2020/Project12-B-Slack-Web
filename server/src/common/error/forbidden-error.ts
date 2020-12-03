import HttpStatusCode from '@constants/http-status-code';

class ForbiddenError extends Error {
  status: number;

  constructor() {
    super('Forbidden');
    this.status = HttpStatusCode.FORBIDDEN;
  }
}

export default ForbiddenError;
