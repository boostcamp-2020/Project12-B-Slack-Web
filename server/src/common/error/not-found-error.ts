import HttpStatusCode from '@constants/http-status-code';

class NotFoundError extends Error {
  status: number;

  constructor() {
    super('Not Found');
    this.status = HttpStatusCode.NOT_FOUND;
  }
}

export default NotFoundError;
