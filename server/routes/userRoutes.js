const express = require("express");
const { registration } = require("../controller/userController");
const { registerValidation } = require("../validations/userValidations");
const router = express.Router();

router.post("/register", registerValidation, registration);

module.exports = router;
