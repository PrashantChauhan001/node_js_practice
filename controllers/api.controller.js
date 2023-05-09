const express = require("express");

const apiController = express.Router();

apiController.get("/", (req, res) =>
  res
    .writeHead(200)
    .end("<h1>Hello world this is api route and docs will be here</h1>")
);

module.exports = apiController;
