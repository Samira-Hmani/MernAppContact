const { check, validationResult } = require("express-validator");

exports.ContactRules = () => [
  check("name", "This field is required").notEmpty(),
  check("lastName", "This field is required").notEmpty(),
  check("email", "This field is required").isEmail(),
  check("phone", "This field is required").isLength({ min: 3 }),
];

exports.RegisterRules = () => [
  check("name", "This field is required").notEmpty(),
  check("lastName", "This field is required").notEmpty(),
  check("email", "This field is required").isEmail(),
  check("phoneNumber", "This field is required").isLength({ min: 3 }),
  check("password", "This field is required").isLength({ min: 4 }),
];

exports.validator = (req, res, next) => {
  const error = validationResult(req);
  error.isEmpty() ? next() : res.status(401).json({ errors: error.array() });

  console.log({ errors: error.array() });
};
