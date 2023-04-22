"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeDefs = "#graphql\n  type Query {\n    allCategories: [AllProduct!]\n  }\n  type AllProduct {\n    img: [String!]!\n    price:[Int!]!\n    _id:ID!\n    sku:[String!]!\n    category:String!\n    name:String!\n    specialType:String!\n    isHot:Boolean!\n    description:String!\n    weight:Int!\n    dimensions:[String!]!\n    colors:[String!]!\n    sizes:[String!]!\n  }\n";
exports.default = typeDefs;
//# sourceMappingURL=typedefs.js.map