const http = require("node:http");
const routeHandler = require("./routes");

const app = http.createServer(routeHandler);

app.listen(8080, () => {
  console.log("listing to the 8080 port");
});
