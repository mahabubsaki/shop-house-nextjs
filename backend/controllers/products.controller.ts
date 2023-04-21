import { NextFunction, Request, Response } from "express";
import createError from 'http-errors';
import ProductModel from '../models/product.model';
import skuGenerator from '../helpers/skuGenerator.helper';

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

export const addProductToCollection = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const productDocument = new ProductModel({ ...req.body, sku: skuGenerator(req.body.category) });
        const response = await productDocument.save();
        res.status(200).send({ ...response, done: true });
    } catch (error) {
        console.log(error);
        if (error instanceof Error) {

            next(createError(422, '', { message: error.message }));
        }
    }
};