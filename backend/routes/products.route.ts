import express from 'express';
import { addProductToCollection, productsController, singleProductController } from '../controllers/products.controller';
const router = express.Router();

router.post('/products', productsController);
router.get('/product/:id', singleProductController);
router.post('/add-product', addProductToCollection);


export default router;