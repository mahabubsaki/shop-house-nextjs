import express from 'express';
import { addProductToCollection, filterProducts, productsController, singleProductController } from '../controllers/products.controller';
const router = express.Router();

router.get('/products', productsController);
router.get('/product/:id', singleProductController);
router.post('/add-product', addProductToCollection);
router.post('/filter-product', filterProducts);

export default router;