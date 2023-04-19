import express from 'express';
import { productsController, singleProductController } from '../controllers/products.controller';
const router = express.Router();

router.get('/products', productsController);
router.get('/product/:id', singleProductController);

export default router;