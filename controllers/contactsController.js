const asyncHandler = require("express-async-handler");
const ContactModel = require("../models/contactModel");

// @des Get all contacts
// @route GET /api/contacts
// @access public
const getContactsController = asyncHandler(async (req, res) => {
  const contact = await ContactModel.find();
  res.status(200).json(contact);
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
  const contact = await ContactModel.create({ name, email, phone });
  res.status(200).json(contact);
});

// @des Get contact
// @route GET /api/contacts/:id
// @access public
const getContactController = asyncHandler(async (req, res) => {
  const contact = await ContactModel.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

// @des Update contact
// @route PUT /api/contacts/:id
// @access public
const updateContactController = asyncHandler(async (req, res) => {
  const contact = await ContactModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(contact);
});

// @des  Delete contact
// @route DELETE /api/contacts/:id
// @access public
const deleteContactController = asyncHandler(async (req, res) => {
  const contact = await ContactModel.findByIdAndDelete(req.params.id, {
    new: true,
  });
  res.status(200).json(contact);
});

module.exports = {
  getContactsController,
  createContactController,
  getContactController,
  updateContactController,
  deleteContactController,
};
