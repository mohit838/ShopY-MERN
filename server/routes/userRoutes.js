const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();

const registerValidation = [
  body("name").not().isEmpty().withMessage("Name is required!"),
];

router.post("/register", registerValidation, (req, res) => {
  const errors = validationResult(req);

  // Delete Later
  console.log(req.body);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
});

module.exports = router;
