const http = require("node:http");

const app = http.createServer((req, res) => {});

app.listen(8080, () => {
  console.log("listing to the 8080 port");
});
