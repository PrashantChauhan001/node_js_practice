const express = require("express");
const apiController = require("../controllers/api.controller");
const userController = require("../controllers/user.controller");

const apiRoutes = express.Router();

apiRoutes.use("/user", userController);
apiRoutes.use("/", apiController);

module.exports = apiRoutes;
