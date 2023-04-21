"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var productSchema = new mongoose_1.default.Schema({
    img: {
        type: [String],
        required: true,
        validate: [function (val) { return val.length === 5; }, 'img must have 5 items'],
    },
    price: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        required: true,
    },
    sku: {
        type: String,
        required: true,
        unique: true,
    },
    category: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    specialType: {
        type: String,
        required: true
    },
    isHot: {
        type: Boolean,
        required: true,
    },
    description: {
        type: String,
        required: true,
        minlength: 200,
    },
    weight: {
        type: Number,
        required: true,
    },
    dimensions: {
        type: [Number],
        required: true,
        validate: [function (val) { return val.length === 3; }, 'dimensions must have 3 items'],
    },
    colors: {
        type: [String],
        required: true,
        validate: [function (val) { return val.length > 0; }, 'colors must have at least 1 item'],
    },
    sizes: {
        type: [String],
        required: true,
        validate: [function (val) { return val.length > 0; }, 'sizes must have at least 1 item'],
    },
});
var ProductModel = mongoose_1.default.model('Product', productSchema, 'productCollection');
exports.default = ProductModel;
//# sourceMappingURL=product.model.js.map