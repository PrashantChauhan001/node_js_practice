const express = require("express");
const {
  loginController,
  registerController,
  currentUserController,
  cronJobController,
} = require("../controllers/usersController");

const router = express.Router();

//
router.post("/login", loginController);

router.post("/register", registerController);

router.get("/current", currentUserController);

router.post("/cron-job", cronJobController);

module.exports = router;
