const { Prisma } = require("prisma-binding");

const typeDesf = require("./../../generated/prisma-client/prisma-schema")
	.typeDefs;

const db = new Prisma({
	typeDefs: typeDesf,
	endpoint:
		"https://us1.prisma.sh/harley-santos-garzon-173e12/learn-graphql/dev",
	debug: false,
});

module.exports = db;
