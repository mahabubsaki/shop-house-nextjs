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
    subCategory: {
        type: String,
        required: true,
        enum: ["Men's", "Women's", "Kid's", 'Speakers', 'Machines', 'Headphones', 'Skincare', 'Haircare', 'Makeup', 'Fragrances', 'Cleaning Supply', 'Sports Gear', 'Sports Shoes', 'Fitness Equipment', 'Dolls', 'Board Games', 'Building Games', 'Vitamins', 'Supplements', 'Medical Supply', 'Fiction', 'Comic', 'Magazine', 'Snacks', 'Sweets', 'Spices', 'Ladies Bag', 'Belts', 'Glasses', 'Shoes', 'Caps', 'Watches', 'Backpacks', 'Sofa']
    },
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        requried: true,
        enum: ['Accessories', 'Fashion', 'Food', 'Clothing', 'Electronics', 'Beauty', 'Kitchen', 'Sports', 'Toys', 'Health', 'Books']
    },
    specialType: {
        type: String,
        allowNull: true,
    },
    isHot: {
        type: Boolean,
        required: true,
    },
    stock: {
        type: Number,
        required: true
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
        enum: ["#808080", "#000000", "#0000FF", "#964B00", "#F5F5DC", "#00FF00", "#FFA500", "#FFFF00", "#FFFFFF", "#FF0000"],
    },
    sizes: {
        type: [String],
        required: true,
        validate: [(val: string[]) => val.length > 0, 'sizes must have at least 1 item'],
        enum: ["XXL", "XL", "L", "M", "S"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 1,
        required: true,
    },
    addedDate: {
        type: Date,
        required: true
    },
    visits: {
        type: Number,
        required: true
    }
});

productSchema.path('subCategory').validate(function (value) {
    const validSubcategories = {
        'Accessories': ['Shoes', 'Caps', 'Watches', 'Backpacks', 'Sofa'],
        'Fashion': ['Ladies Bag', 'Belts', 'Glasses'],
        'Food': ['Snacks', 'Sweets', 'Spices'],
        'Clothing': ["Men's", "Women's", "Kid's"],
        'Electronics': ['Speakers', 'Machines', 'Headphones'],
        'Beauty': ['Skincare', 'Haircare', 'Makeup', 'Fragrances'],
        'Kitchen': ['Cleaning Supply'],
        'Sports': ['Sports Gear', 'Sports Shoes', 'Fitness Equipment'],
        'Toys': ['Dolls', 'Board Games', 'Building Games'],
        'Health': ['Vitamins', 'Supplements', 'Medical Supply'],
        'Books': ['Fiction', 'Comic', 'Magazine']
    };
    const validValues = validSubcategories[this.category] || [];
    return validValues.indexOf(value) !== -1;
}, 'subcategory not allowed for this category');


const ProductModel = mongoose.model('Product', productSchema, 'productCollection');

export default ProductModel;



