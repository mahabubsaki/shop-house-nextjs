"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeDefs = "#graphql\n  type Query {\n    allCategories: [String!]!\n  }\n  type Query {\n    allProducts:[AllProductInfo]!\n  }\n  type Query {\n    getProductByName(name: String!): [AllProductInfo!]!\n  }\n  type AllProductInfo {\n    img: [String!]!\n    price:Int!\n    _id:ID!\n    sku:String!\n    discount:Int!\n    category:String!\n    name:String!\n    specialType:String\n    subCategory:String!\n    isHot:Boolean!\n    stock:Int!\n    description:String!\n    weight:Float!\n    dimensions:[Int!]!\n    colors:[String!]!\n    sizes:[String!]!\n  }\n";
exports.default = typeDefs;
//# sourceMappingURL=typedefs.js.map