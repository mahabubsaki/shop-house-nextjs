import ProductModel from '../models/product.model';
const resolvers = {
    Query: {
        allCategories: async () => {
            const products = await ProductModel.distinct('subCategory');
            return products;
        },
        allColors: async () => {
            const allColors = await ProductModel.find({});
            return allColors;
        }
    }
};
export default resolvers;