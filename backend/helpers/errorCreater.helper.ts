import createError, { HttpError } from 'http-errors';
import { Request, Response, NextFunction } from 'express';
export default async function (req: Request, res: Response, next: NextFunction) {
    next(createError(404, "The requested resource could not be found."));
}