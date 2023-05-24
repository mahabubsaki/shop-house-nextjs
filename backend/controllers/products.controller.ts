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




// GET /products?pageSize=10&pageNum=1&sort=name
// router.get('/products', async (req, res) => {
//   const pageSize = parseInt(req.query.pageSize) || 10;
//   const pageNum = parseInt(req.query.pageNum) || 1;
//   const sort = req.query.sort || 'name';

//   const skip = (pageNum - 1) * pageSize;
//   const totalProducts = await Product.countDocuments();
//   const totalPages = Math.ceil(totalProducts / pageSize);

//   Product.find()
//     .sort(sort)
//     .skip(skip)
//     .limit(pageSize)
//     .exec((err, products) => {
//       if (err) {
//         return res.status(500).json({ message: err.message });
//       }

//       res.json({
//         products,
//         pageInfo: {
//           totalProducts,
//           totalPages,
//           currentPage: pageNum,
//           pageSize,
//         },
//       });
//     });
// });

// module.exports = router;


// const products = await ProductModel.find({});

// // Loop through products and add a random rating
// for (const product of products) {
//     const startDate = new Date(2023, 2, 17); // March 17, 2023
//     const endDate = new Date(2023, 3, 26); // April 26, 2023
//     const range = differenceInDays(endDate, startDate) + 1;

//     const randomDate = addDays(startDate, Math.floor(Math.random() * range));
//     product.addedDate = randomDate;
//     await product.save();
// }

// res.send('Random ratings added to products without a rating.');