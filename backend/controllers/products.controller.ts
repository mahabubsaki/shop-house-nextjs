import { NextFunction, Request, Response } from "express";


export const productsController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(200).send({ done: true });
    } catch (error) {
        if (error instanceof Error) {
            console.error(error);
            res.status(500).send({ error: error.message, controller: 'productsController' });
        }
    }
};

export const singleProductController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(200).send({ id: req.params.id });
    } catch (error) {
        if (error instanceof Error) {
            console.error(error);
            res.status(500).send({ error: error.message, controller: 'singleProductController' });
        }
    }
};