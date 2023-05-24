const typeDefs = `#graphql
  type Query {
    allCategories: [String!]!
  }
  type Query {
    allProducts:[AllProductInfo]!
  }
  type Query {
    getProductByName(name: String!): [AllProductInfo!]!
  }
  type AllProductInfo {
    img: [String!]!
    price:Int!
    _id:ID!
    sku:String!
    discount:Int!
    category:String!
    name:String!
    specialType:String
    subCategory:String!
    isHot:Boolean!
    stock:Int!
    description:String!
    weight:Float!
    dimensions:[Int!]!
    colors:[String!]!
    sizes:[String!]!
  }
`;

export default typeDefs;
