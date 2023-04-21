import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginLandingPageProductionDefault } from '@apollo/server/plugin/landingPage/default';


const graphQlServer = new ApolloServer({
    typeDefs: `#graphql
    type Query{
        apiStatus:Boolean
    }
    `,
    resolvers: {
        Query: {
            apiStatus: () => true
        }
    },
    plugins: [
        ApolloServerPluginLandingPageProductionDefault({ footer: false })
    ]
});

export default graphQlServer

