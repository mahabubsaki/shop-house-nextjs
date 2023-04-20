//a middleware to check if the db connnected or not
import mongoose from "mongoose";
import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';

export default async (req: Request, res: Response, next: NextFunction) => {
    if (mongoose.connection.readyState !== 1) {
        return next(createError(503, 'Service Unavailable', { message: 'Database not connected yet' }));
    }
    next();
};
