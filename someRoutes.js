const express = require("express");
const router = express.Router();

// Define routes here
router.get("/", (req, res) => {
  res.send("API is working!");
});

module.exports = router; // ✅ Correct Export
