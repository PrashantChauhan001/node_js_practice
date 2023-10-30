require("dotenv").config();
const path = require("path");
const express = require("express");
const connectToMongo = require("src/configs/db.configs");
const tasksRouter = require("src/routes/tasks.routes");
const { errorHandler } = require("src/middlewares/errorHandler.middlewares");
const notFoundHandler = require("./middlewares/notFound.middlewares");

const app = express();

app.use("/public", express.static(path.join(__dirname, "../public")));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(301).redirect("/public/index.html");
});

app.use("/api/v1/tasks", tasksRouter);

app.use(notFoundHandler);
app.use(errorHandler);

const startServer = () => {
  console.log("DB is connected to the app");
  app.listen(process.env.PORT, (req, res) => {
    console.log(`App is running on the ${process.env.PORT}.`);
  });
};

// mongodb connection
connectToMongo(process.env.MONGO_URI, startServer);
