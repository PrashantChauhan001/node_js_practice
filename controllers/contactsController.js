// @des Get all contacts
// @route GET /api/contacts
// @access public
const getContactsController = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

// @des Create contact
// @route POST /api/contacts
// access public
const createContactController = (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    req.status(400);
    throw new Error("All fields are mendatory");
  }
  res.status(200).json({ message: "Create contact" });
};

// @des Get contact
// @route GET /api/contacts/:id
// @access public
const getContactController = (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
};

// @des Update contact
// @route PUT /api/contacts/:id
// @access public
const updateContactController = (req, res) => {
  res.status(200).json({ message: `Update contact ${req.params.id}` });
};

// @des  Delete contact
// @route DELETE /api/contacts/:id
// @access public
const deleteContactController = (req, res) => {
  res.status(200).json({ message: `Delete contact ${req.params.id}` });
};

module.exports = {
  getContactsController,
  createContactController,
  getContactController,
  updateContactController,
  deleteContactController,
};
