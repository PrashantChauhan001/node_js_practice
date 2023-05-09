const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the contact name"],
    },
    email: {
      type: String,
      required: [true, "Please add email of the contact"],
    },
    phone: {
      type: String,
      required: [true, "Please add phone number of the contact"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
