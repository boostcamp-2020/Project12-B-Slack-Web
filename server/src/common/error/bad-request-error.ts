import HttpStatusCode from '@constants/http-status-code';

class BadRequestError extends Error {
  status: number;

  constructor() {
    super('Bad Request');
    this.status = HttpStatusCode.BAD_REQUEST;
  }
}

export default BadRequestError;
