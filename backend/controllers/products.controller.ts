import { NextFunction, Request, Response } from "express";

export const productsController = async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ done: true });
};
export const singleProductController = async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ id: req.params.id });
};