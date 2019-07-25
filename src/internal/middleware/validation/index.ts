import { Request, Response, NextFunction, RequestHandler } from 'express';
import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { HttpException } from '../../../models';

export default async <T>(type: any, payload: any, skipMissingProperties = false): Promise<string | void> => {
  let errors: ValidationError[] | void;
  try {
     errors = await validate(plainToClass(type, payload), { skipMissingProperties });
  } catch (e) {
    console.error('caught error validating', e);
    return 'bad request'
  }

  if (errors && errors.length > 0) {
    const msg: string = errors.map((error: ValidationError) => Object.values(error.constraints)).join(', ');
    return msg
  }
}
