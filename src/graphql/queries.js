const { forwardTo } = require("prisma-binding");

const Query = {
	// async books(parent, args, context, info) {
	// 	try {
	// 		const books = await context.db.query.books();
	// 		return books;
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// },
	// ForwardTo the default query definitions
	books: forwardTo("db"),
	book: forwardTo("db"),
	users: forwardTo("db"),
	user: forwardTo("db"),
};

module.exports = Query;
