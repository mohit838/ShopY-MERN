const express = require("express");
const { registration, login } = require("../controller/userController");
const {
  registerValidation,
  loginValidations,
} = require("../validations/userValidations");

// Express Route Initialized
const router = express.Router();

// User Reg and Login Routes
router.post("/register", registerValidation, registration);
router.post("/login", loginValidations, login);

module.exports = router;
