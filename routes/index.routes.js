const express = require("express");
const apiController = require("../controllers/api.controller");
const notFoundController = require("../controllers/notFound.controller");

const indexRoutes = express.Router();

indexRoutes.use("/api", apiController);
indexRoutes.use("*", notFoundController);

module.exports = indexRoutes;
