const express = require("express");

const router = express.Router();

router.post("/login", (req, res) => {
  res.status(200).json({ messge: "login route response" });
});

router.post("/register", (req, res) => {
  res.status(200).json({ messge: "register route response" });
});

module.exports = router;
