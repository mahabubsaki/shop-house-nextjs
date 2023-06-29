import { NextFunction, Request, Response } from "express";
import createError from 'http-errors';
import ProductModel from '../models/product.model';
import skuGenerator from '../helpers/skuGenerator.helper';
const { addDays, differenceInDays } = require('date-fns');



export const productsController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log(req.body);
        const pageSize = Number(req.query.pageSize) || 12;

        const pageNum = Number(req.query.pageNumber) || 1;
        const sort = req.query?.sort?.toString() || 'name';
        const type = req.query.type !== 'false';
        const skip = (pageNum - 1) * pageSize;
        let filter = {};
        let total = await ProductModel.estimatedDocumentCount();
        if (Object.keys(req.body).length > 0) {
            filter = {
                $and: [{ subCategory: { $in: req.body.subCategory } },
                { price: { $gte: req.body.price[0], $lte: req.body.price[1] } },
                { colors: { $in: req.body.colors } },
                { sizes: { $in: req.body.sizes } }]
            };
            total = (await ProductModel.find(filter)).length;
        }


        res.status(200).send({
            products: await ProductModel.find(filter).sort({ [sort]: type ? 1 : -1 }).skip(skip).limit(pageSize), totalProduct: total
        });
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

