const { GraphQLServer } = require("graphql-yoga");

const Mutation = require("../graphql/mutations.js");
const Query = require("../graphql/queries.js");
const db = require("../database/index.js");

const resolvers = {
	Query,
	Mutation,
};

const createServer = () => {
	return new GraphQLServer({
		typeDefs: "./src/graphql/graphql-yoga-schema.graphql",
		resolvers,
		resolverValidationOptions: {
			requireResolversForResolveType: false,
		},
		context: (request) => ({ ...request, db }),
	});
};

module.exports = createServer;
