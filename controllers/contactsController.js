const asyncHandler = require("express-async-handler");

// @des Get all contacts
// @route GET /api/contacts
// @access public
const getContactsController = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
});

// @des Create contact
// @route POST /api/contacts
// access public
const createContactController = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mendatory");
  }
  res.status(200).json({ message: "Create contact" });
});

// @des Get contact
// @route GET /api/contacts/:id
// @access public
const getContactController = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
});

// @des Update contact
// @route PUT /api/contacts/:id
// @access public
const updateContactController = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update contact ${req.params.id}` });
});

// @des  Delete contact
// @route DELETE /api/contacts/:id
// @access public
const deleteContactController = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete contact ${req.params.id}` });
});

module.exports = {
  getContactsController,
  createContactController,
  getContactController,
  updateContactController,
  deleteContactController,
};
