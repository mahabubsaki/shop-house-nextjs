"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("@apollo/server");
var default_1 = require("@apollo/server/plugin/landingPage/default");
var typedefs_1 = __importDefault(require("../graphql/typedefs"));
var resolvers_1 = __importDefault(require("../graphql/resolvers"));
var graphQlServer = new server_1.ApolloServer({
    typeDefs: typedefs_1.default,
    resolvers: resolvers_1.default,
    plugins: [
        (0, default_1.ApolloServerPluginLandingPageProductionDefault)({ footer: false })
    ]
});
//playground : https://studio.apollographql.com/sandbox/explorer
exports.default = graphQlServer;
//# sourceMappingURL=apollo-server.config.js.map