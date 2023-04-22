import ProductModel from '../models/product.model';
const resolvers = {
    Query: {
        allCategories: async () => {
            const products = await ProductModel.distinct('category');
            return products;
        }
    }
};
export default resolvers;