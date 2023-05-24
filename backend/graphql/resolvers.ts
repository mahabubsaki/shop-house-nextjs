import ProductModel from '../models/product.model';
const resolvers = {
    Query: {
        allCategories: async () => {
            const products = await ProductModel.distinct('subCategory');
            return products;
        },
        allProducts: async () => {
            const allProducts = await ProductModel.find({});
            return allProducts;
        },
        getProductByName: async (_, { name }) => {
            console.log(name);
            const products = await ProductModel.find({ name: { $regex: name, $options: 'i' } });
            return products;
        },
    }
};
export default resolvers;