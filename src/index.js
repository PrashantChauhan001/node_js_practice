require("dotenv").config();

const express = require("express");
const connectToMongo = require("./configs/db.configs");
const tasksRouter = require("./routes/tasks.routes");

const app = express();

app.use(express.json());

app.get("/api/v1", (req, res) => {
  res.status(200).json(process.env);
});

app.use("/api/v1/tasks", tasksRouter);

app.get("/tasks", (req, res) => {
  res.status(200).send("This is tasks get route");
});

const startServer = () => {
  console.log("DB is connected to the app");
  app.listen(process.env.PORT, (req, res) => {
    console.log(`App is running on the ${process.env.PORT}.`);
  });
};

// mongodb connection
connectToMongo(process.env.MONGO_URI, startServer);
