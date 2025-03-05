require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Contact Schema & Model
const contactSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", contactSchema);

// API Route to Save Messages
app.post("/api/contact", async (req, res) => {
  try {
    const { fullName, email, phone, message } = req.body;
    if (!fullName || !email || !phone || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }
    
    const newContact = new Contact({ fullName, email, phone, message });
    await newContact.save();
    
    res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
