const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
jwt = require("jsonwebtoken");
const { asyncHandlerFunc } = require("../utils/asyncHandler");

// @des login with credencials
// @route GET /api/users/login
// @access public
const loginController = asyncHandlerFunc(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("Request body is not proper");
  }
  const user = await userModel.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.JWT_SECRETE,
      { expiresIn: "5m" }
    );
    res.status(200).json({ token });
  } else {
    res.status(400);
    throw new Error("Credential are incorrect");
  }
});

// @des register user
// @route GET /api/users/register
// @access public
const registerController = asyncHandlerFunc(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Request body is not proper");
  }
  const isAvailable = await userModel.findOne({ email });
  if (isAvailable) {
    res.status(400);
    throw new Error("Email already taken");
  }
  const hashPass = await bcrypt.hash(password, 10);
  const user = await userModel.create({ username, email, password: hashPass });
  res.status(201).json({ username, email, id: user["_id"] });
});

// @des get current user
// @route GET /api/users/current
// @access public
const currentUserController = (req, res) => {
  res.status(200).json({ messge: "Current user" });
};

module.exports = { loginController, registerController, currentUserController };
