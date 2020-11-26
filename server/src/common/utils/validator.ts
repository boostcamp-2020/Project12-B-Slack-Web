import { validate } from 'class-validator';
import BadRequestError from '@error/bad-request-error';

const validator = async (reqType: object) => {
  const errors = await validate(reqType);
  if (errors.length > 0) {
    throw new BadRequestError();
  }
};

export default validator;
