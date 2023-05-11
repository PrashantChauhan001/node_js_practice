const express = require("express");
const {
  loginController,
  registerController,
  currentUserController,
} = require("../controllers/usersController");

const router = express.Router();

//
router.post("/login", loginController);

router.post("/register", registerController);

router.get("/current", currentUserController);

module.exports = router;
