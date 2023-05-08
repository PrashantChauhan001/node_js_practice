const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const indexRoutes = require("./routes/index.routes");
const morganLogger = require("morgan");
const fs = require("fs");
const path = require("path");
const connectDB = require("./config/database.config");

const app = express();

// for log the incomming request and
app.use(
  morganLogger("dev", {
    skip: (req, res) => res.statusCode < 400,
    stream: fs.createWriteStream(path.join(__dirname, "logs/logger.log.txt"), {
      flags: "a",
    }),
  }),
  morganLogger("dev")
);

// connect to db
connectDB();

dotenv.config();
// you can use cors with specific path with custum headers and
app.use(cors({ origin: "*" })); // allow all routes on cors policy

app.use(express.json(), express.urlencoded({ extended: true })); // handle json and url encoded reposnse

app.use(express.static("public")); // provide public file on public path

app.use("/", indexRoutes);

app.listen(process.env.PORT, () =>
  console.log("Server is running on port: " + process.env.PORT)
);
