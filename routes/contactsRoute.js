const express = require("express");
const {
  getContactsController,
  createContactController,
  getContactController,
  updateContactController,
  deleteContactController,
} = require("../controllers/contactsController");

const router = express.Router();

router.route("/").get(getContactsController);

router.route("/").post(createContactController);

router.route("/:id").get(getContactController);

router.route("/:id").put(updateContactController);

router.route("/:id").delete(deleteContactController);

module.exports = router;
