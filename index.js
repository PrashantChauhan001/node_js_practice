const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const indexRoutes = require("./routes/index.routes");

const app = express();

dotenv.config();
// you can use cors with specific path with custum headers and
app.use(cors({ origin: "*" })); // allow all routes on cors policy

app.use(express.json(), express.urlencoded({ extended: true })); // handle json and url encoded reposnse

app.use(express.static("public")); // provide public file on public path

app.use("/", indexRoutes);

app.listen(process.env.PORT, () =>
  console.log("Server is running on port: " + process.env.PORT)
);
