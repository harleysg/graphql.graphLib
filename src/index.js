const createServer = require("./server/index.js");
const db = require("./database/index.js");
const server = createServer();

server.start(
	{
		cors: {
			credentials: true,
			origin: "*",
		},
	},
	({ port }) => {
		console.log(`Server listen port: ${port}`);
	}
);
