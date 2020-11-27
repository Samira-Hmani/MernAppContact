const express = require("express");

const {
  addContact,
  showContacts,
  editContact,
  deleteContact,
} = require("../controllers/contact.controller");
const isAuth = require("../Middleware/passport-setup");

const { validator, ContactRules } = require("../Middleware/validator");

const router = express.Router();

router.post("/addContact", ContactRules(), validator, addContact);

router.get("/showContacts",showContacts);

router.put("/updateContact/:_id", editContact);

router.delete("/deleteContact/:_id", deleteContact);

module.exports = router;
