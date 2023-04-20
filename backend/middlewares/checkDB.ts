//a middleware to check if the db connnected or not
import mongoose from "mongoose";
import { Request, Response, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
    if (mongoose.connection.readyState !== 1) {
        return res.status(503).json({
            message: 'Service Unavailable - Database is not connected',
        });
    }
    next();
};
