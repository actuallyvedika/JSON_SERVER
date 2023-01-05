const jsonserver = require("json-server");
const server = jsonserver.create();
const router = jsonserver.router("db.json");
// const middleware = jsonserver.defaults();
const PORT = 3000;
const cors = require("cors)

// server.use(middleware);
server.use(router);
server.use(cors())

server.listen(PORT);
