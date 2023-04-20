import createError, { HttpError } from 'http-errors';
import { Request, Response, NextFunction } from 'express';

export default function (err: HttpError, req: Request, res: Response, next: NextFunction) {
    const error = createError(err);
    res.status(error.status || 500).json({
        status: error.status || 500,
        message: error.message || 'Unknown Error occured',
        query: req.query,
        params: req.params,
        endpoint: req.originalUrl
    });
};