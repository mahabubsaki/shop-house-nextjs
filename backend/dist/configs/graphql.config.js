"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("@apollo/server");
var default_1 = require("@apollo/server/plugin/landingPage/default");
var graphQlServer = new server_1.ApolloServer({
    typeDefs: "#graphql\n    type Query{\n        apiStatus:Boolean\n    }\n    ",
    resolvers: {
        Query: {
            apiStatus: function () { return true; }
        }
    },
    plugins: [
        (0, default_1.ApolloServerPluginLandingPageProductionDefault)({ footer: false })
    ]
});
exports.default = graphQlServer;
//# sourceMappingURL=graphql.config.js.map