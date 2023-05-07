const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();

dotenv.config();
// you can use cors with specific path with custum headers and
app.use(cors({ origin: "*" })); // allow all routes on cors policy

app.use(express.json(), express.urlencoded({ extended: true })); // handle json and url encoded reposnse

app.use(express.static("public")); // provide public file on public path

app.get("/api", (req, res) => res.writeHead(200).end("<h1>Hello world</h1>")); // handle root route

app.get("*", (req, res) =>
  res
    .writeHead(404)
    .end(
      "<div style='color:red;text-align:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);margin:0;'> <h1>Asset you are serching is not available</h1><a href='/'>Home page</a> </div>"
    )
); // handle root route

app.listen(8080, () => console.log("Server is running on port 8080"));
