const { body } = require("express-validator");

module.exports.registerValidation = [
  body("name").not().isEmpty().trim().escape().withMessage("Name is required!"),
];
