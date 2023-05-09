const express = require("express");
const Users = require("../schemas/User.schema");

const userController = express.Router();

userController.get("/", (req, res) =>
  res.writeHead(200).end("<h1>this is user controller</h1>")
);

userController.post("/", async (req, res) => {
  const { name, age } = req.body;
  console.log(name, age);
  const user = new Users({ name, age });
  try {
    await user.save();
    res.writeHead(201).end("User created.");
  } catch (err) {
    console.log(err);
    res.status(500).end("mongo error");
  }
});

module.exports = userController;
