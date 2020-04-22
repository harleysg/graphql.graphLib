const createServer = require("./server/index.js");
const db = require("./database/index.js");
const server = createServer();

server.start(
	{
		cors: {
			credentials: true,
			origin: ["*", "http://localhost:8085", "http://localhost:4000"],
		},
	},
	({ port }) => {
		console.log(`Server listen port: ${port}`);
	}
);
