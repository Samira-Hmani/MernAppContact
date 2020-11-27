const express = require("express");

const router = express.Router();
const isAuth = require("../Middleware/passport-setup");

const { register, login } = require("../controllers/user.controller");

const { RegisterRules, validator } = require("../Middleware/validator");

router.post("/register", RegisterRules(), validator, register);

router.post("/login", login);

router.get("/current", isAuth(), (req, res) => {
  console.log("req", req.user);

  res.json(req.user);
});

module.exports = router;
