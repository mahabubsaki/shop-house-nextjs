import mongoose from 'mongoose';


const productSchema = new mongoose.Schema({
    img: {
        type: [String],
        required: true,
        validate: [(val: string[]) => val.length === 5, 'img must have 5 items'],
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
        validate: [(val: number[]) => val.length === 3, 'dimensions must have 3 items'],
    },
    colors: {
        type: [String],
        required: true,
        validate: [(val: string[]) => val.length > 0, 'colors must have at least 1 item'],
    },
    sizes: {
        type: [String],
        required: true,
        validate: [(val: string[]) => val.length > 0, 'sizes must have at least 1 item'],
    },
});


const ProductModel = mongoose.model('Product', productSchema, 'productCollection');

export default ProductModel;