import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import createError from 'http-errors';
import dotEnvConfig from '../configs/dotenv.config.';

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email } = req.body;
        if (!email) {
            return next(createError(400, 'Bad Request', { message: 'Email is required while creating token' }));
        }
        const token = jwt.sign({ email }, dotEnvConfig.JWT_SECRET);
        res.status(200).json({ token });
    } catch (error) {
        if (error instanceof Error) {
            next(createError(400, 'Bad Request', { message: error.message }));
        }
    }
};