const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/db");
const env = require("./config/envConfig");
const userRoutes = require("./routes/users/userRoutes");

// All Middlewires
app = express();
app.use(express.json());
app.use(cors());

// DB Connection
dbConnect();

// User Router
app.use("/api", userRoutes);

// Test route
app.get("/", (req, res) => {
  res.json({ msg: "Welcome to ShopY." });
});

// PORT selection
const port = env.PORT || 5000;

// Check PORT
app.listen(port, () => {
  console.log(`ShopY Running on port ${port}`);
});
