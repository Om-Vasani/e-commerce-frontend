const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.status(200).json({ message: "Contact form submitted successfully!" });
});

module.exports = router;
