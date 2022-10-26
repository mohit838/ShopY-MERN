const { validationResult } = require("express-validator");

// @Registration
module.exports.registration = (req, res) => {
  const errors = validationResult(req);

  // Delete Later
  console.log(req.body);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
};

// @Login
module.exports.login = (req, res) => {
  const errors = validationResult(req);

  // Delete Later
  console.log(req.body);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
};
