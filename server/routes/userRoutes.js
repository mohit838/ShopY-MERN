const express = require("express");
const { registration, login } = require("../controller/userController");
const {
  registerValidation,
  loginValidations,
} = require("../validations/userValidations");
const router = express.Router();

router.post("/register", registerValidation, registration);
router.post("/login", loginValidations, login);

module.exports = router;
