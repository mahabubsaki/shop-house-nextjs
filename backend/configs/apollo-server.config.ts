import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginLandingPageProductionDefault } from '@apollo/server/plugin/landingPage/default';
import typeDefs from '../graphql/typedefs';
import resolvers from '../graphql/resolvers';


const graphQlServer = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
        ApolloServerPluginLandingPageProductionDefault({ footer: false })
    ]
});
//playground : https://studio.apollographql.com/sandbox/explorer
export default graphQlServer

