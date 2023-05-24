"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProductToCollection = exports.singleProductController = exports.productsController = void 0;
var http_errors_1 = __importDefault(require("http-errors"));
var product_model_1 = __importDefault(require("../models/product.model"));
var skuGenerator_helper_1 = __importDefault(require("../helpers/skuGenerator.helper"));
var _a = require('date-fns'), addDays = _a.addDays, differenceInDays = _a.differenceInDays;
var productsController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var pageSize, pageNum, sort, type, skip, _a, _b, error_1;
    var _c, _d;
    var _e, _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _g.trys.push([0, 3, , 4]);
                console.log(req.query);
                pageSize = Number(req.query.pageSize) || 12;
                pageNum = Number(req.query.pageNumber) || 1;
                sort = ((_f = (_e = req.query) === null || _e === void 0 ? void 0 : _e.sort) === null || _f === void 0 ? void 0 : _f.toString()) || 'name';
                type = req.query.type !== 'false';
                skip = (pageNum - 1) * pageSize;
                _b = (_a = res.status(200)).send;
                _c = {};
                return [4 /*yield*/, product_model_1.default.find({}).sort((_d = {}, _d[sort] = type ? 1 : -1, _d)).skip(skip).limit(pageSize)];
            case 1:
                _c.products = _g.sent();
                return [4 /*yield*/, product_model_1.default.estimatedDocumentCount()];
            case 2:
                _b.apply(_a, [(_c.totalProduct = _g.sent(), _c)]);
                return [3 /*break*/, 4];
            case 3:
                error_1 = _g.sent();
                if (error_1 instanceof Error) {
                    next((0, http_errors_1.default)(400, 'Bad Request', { message: error_1.message }));
                }
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.productsController = productsController;
var singleProductController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var products, _i, products_1, product, random, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 6, , 7]);
                return [4 /*yield*/, product_model_1.default.find({})];
            case 1:
                products = _a.sent();
                _i = 0, products_1 = products;
                _a.label = 2;
            case 2:
                if (!(_i < products_1.length)) return [3 /*break*/, 5];
                product = products_1[_i];
                random = Math.floor(Math.random() * (70 - 35 + 1)) + 35;
                product.visits = random;
                return [4 /*yield*/, product.save()];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4:
                _i++;
                return [3 /*break*/, 2];
            case 5:
                res.send('Random ratings added to products without a rating.');
                return [3 /*break*/, 7];
            case 6:
                error_2 = _a.sent();
                if (error_2 instanceof Error) {
                    next((0, http_errors_1.default)(400, 'Bad Request', { message: error_2.message }));
                }
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.singleProductController = singleProductController;
var addProductToCollection = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var productDocument, response, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                productDocument = new product_model_1.default(__assign(__assign({}, req.body), { sku: (0, skuGenerator_helper_1.default)(req.body.category) }));
                return [4 /*yield*/, productDocument.save()];
            case 1:
                response = _a.sent();
                res.status(200).send(__assign(__assign({}, response), { done: true }));
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                console.log(error_3);
                if (error_3 instanceof Error) {
                    next((0, http_errors_1.default)(422, '', { message: error_3.message }));
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.addProductToCollection = addProductToCollection;
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
//# sourceMappingURL=products.controller.js.map