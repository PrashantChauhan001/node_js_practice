const ContactModel = require("../models/contactModel");
const { asyncHandlerFunc } = require("../utils/asyncHandler");

// @des Get all contacts
// @route GET /api/contacts
// @access public
const getContactsController = asyncHandlerFunc(async (req, res) => {
  const contact = await ContactModel.find();
  res.status(200).json(contact);
});

// @des Create contact
// @route POST /api/contacts
// access public
const createContactController = asyncHandlerFunc(async (req, res) => {
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
const getContactController = asyncHandlerFunc(async (req, res) => {
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
const updateContactController = asyncHandlerFunc(async (req, res) => {
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
const deleteContactController = asyncHandlerFunc(async (req, res) => {
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
