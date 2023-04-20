//a middleware to verify the jwt token. from any controller we have to just compare the req.decodedEmail and email we get from user
import { Request, Response, NextFunction } from 'express';
import User from "../interfaces/user.interface";
import jwt from 'jsonwebtoken';
import createError from 'http-errors';





export default async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return next(createError(401, 'Unauthorized', { message: 'JWT not found on the header' }));
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET) as User;
        if (decoded.email !== req.headers.email) {
            return next(createError(403, 'Forbidden', { message: 'JWT Token mismatch with your email' }));
        }
        next();
    } catch (error) {
        if (error instanceof Error) {
            next(createError(401, 'Unauthorized', { message: error.message }));
        }
    }
};