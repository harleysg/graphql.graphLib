const createServer = require("./server/index.js");
const DB = require("./database/index.js");
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
