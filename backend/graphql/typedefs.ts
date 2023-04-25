const typeDefs = `#graphql
  type Query {
    allCategories: [String!]!
  }
  type Query {
    allColors:[AllProduct]!
  }
  type AllProduct {
    img: [String!]!
    price:[Int!]!
    _id:ID!
    sku:[String!]!
    category:String!
    name:String!
    specialType:String!
    isHot:Boolean!
    description:String!
    weight:Int!
    dimensions:[String!]!
    colors:[String!]!
    sizes:[String!]!
  }
`;

export default typeDefs;
