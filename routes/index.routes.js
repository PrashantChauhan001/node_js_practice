const express = require("express");
const apiController = require("../controllers/api.controller");
const notFoundController = require("../controllers/notFound.controller");
const apiRoutes = require("./api.route");

const indexRoutes = express.Router();

indexRoutes.use("/api", apiRoutes);
indexRoutes.use("*", notFoundController);

module.exports = indexRoutes;
