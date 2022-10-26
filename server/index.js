const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/db");
const env = require("./config/envConfig");

// All Middlewires
app = express();
app.use(express.json());
app.use(cors());

// DB Connection
dbConnect();

// User Router

// Test route
app.get("/", (req, res) => {
  res.json({ msg: "welcome to ShopY." });
});

// PORT selection
const port = env.PORT || 5000;

// Check PORT
app.listen(port, () => {
  console.log(`gRio Running on port ${port}`);
});
