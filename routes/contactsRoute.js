const express = require("express");
const {
  getContactsController,
  createContactController,
  getContactController,
  updateContactController,
  deleteContactController,
} = require("../controllers/contactsController");

const router = express.Router();

router.route("/").get(getContactsController).post(createContactController);

router
  .route("/:id")
  .get(getContactController)
  .put(updateContactController)
  .delete(deleteContactController);

module.exports = router;
