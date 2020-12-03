import HttpStatusCode from '@constants/http-status-code';

class UnauthorizedError extends Error {
  status: number;

  constructor() {
    super('Unauthorized');
    this.status = HttpStatusCode.UNAUTHORIZED;
  }
}

export default UnauthorizedError;
