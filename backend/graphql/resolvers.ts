import ProductModel from '../models/product.model';
const resolvers = {
    Query: {
        allCategories: async () => {
            const products = await ProductModel.find({});
            return products;
        }
    }
};
export default resolvers;