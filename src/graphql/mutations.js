const Mutation = {
	async createBook(parent, args, context, info) {
		const book = await context.db.mutation.createBook(
			{
				data: {
					...args /* Se recomiendo no usarlo asi, mejor validar los argumentos antes de enviarlos a la base de datos*/,
				},
			},
			info
		);

		// TODO: Send email notificatino
		// TODO: Make a post
		// TODO: Send user notification

		return book;
	},
};

module.exports = Mutation;
