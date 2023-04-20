import { NextFunction, Request, Response } from "express";
import createError from 'http-errors';

export const productsController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(200).send({ done: true });
    } catch (error) {
        if (error instanceof Error) {
            next(createError(400, 'Bad Request', { message: error.message }));
        }
    }
};

export const singleProductController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(200).send({ id: req.params.id });
    } catch (error) {
        if (error instanceof Error) {
            next(createError(400, 'Bad Request', { message: error.message }));
        }
    }
};