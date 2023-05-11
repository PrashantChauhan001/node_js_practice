const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "User name is required field"],
    },
    email: {
      type: String,
      required: [true, "Email is required field"],
      unique: [true, "Email is already taken"],
    },
    password: {
      type: String,
      required: [true, "Password is required field"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", userSchema);
