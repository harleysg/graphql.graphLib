const Query = {
	books(parent, args, context, info) {
		return [
			{ title: "Eloquent Javascript", image: "eloquent-javascript.png" },
			{
				title: "JavaScript: The Good Parts",
				image: "javaScript-goodparts.png",
			},
		];
	},
};

module.exports = Query;
