import { NextFunction, Request, Response } from "express";
import createError from 'http-errors';
import ProductModel from '../models/product.model';
import skuGenerator from '../helpers/skuGenerator.helper';
const { addDays, differenceInDays } = require('date-fns');



export const productsController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log(req.query);
        const pageSize = Number(req.query.pageSize) || 12;

        const pageNum = Number(req.query.pageNumber) || 1;
        const sort = req.query?.sort?.toString() || 'name';
        const type = req.query.type !== 'false';
        const skip = (pageNum - 1) * pageSize;

        res.status(200).send({ products: await ProductModel.find({}).sort({ [sort]: type ? 1 : -1 }).skip(skip).limit(pageSize), totalProduct: await ProductModel.estimatedDocumentCount() });
    } catch (error) {
        if (error instanceof Error) {
            next(createError(400, 'Bad Request', { message: error.message }));
        }
    }
};

export const singleProductController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const products = await ProductModel.find({});

        // Loop through products and add a random rating
        for (const product of products) {
            const random = Math.floor(Math.random() * (70 - 35 + 1)) + 35;


            product.visits = random;
            await product.save();


        }

        res.send('Random ratings added to products without a rating.');
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


export const filterProducts = async (req: Request, res: Response, next: NextFunction) => {
    const { subCategory, price, colors, sizes } = req.body;
    console.log(colors);
    const filters = {
        subCategory: { $in: subCategory },
        price: { $gte: price[0], $lte: price[1] },
        colors: { $in: colors },
        sizes: { $in: sizes }
    };
    const data = await ProductModel.find(filters);

    res.send(data);

};