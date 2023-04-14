const http = require("node:http");
const routeHandler = require("./routes");
const { bodyParser } = require("./utils/helper.utils");

const serverHandler = (req, res) => {
  bodyParser(req, res, routeHandler);
};

const app = http.createServer(serverHandler);

app.listen(8080, () => {
  console.log("listing to the http//localhost:8080 port");
});
