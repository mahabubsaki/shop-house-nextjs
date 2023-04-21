"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var products_controller_1 = require("../controllers/products.controller");
var router = express_1.default.Router();
router.get('/products', products_controller_1.productsController);
router.get('/product/:id', products_controller_1.singleProductController);
router.post('/add-product', products_controller_1.addProductToCollection);
exports.default = router;
//# sourceMappingURL=products.route.js.map