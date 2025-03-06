const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Import the contact route
const contactRoutes = require("./routes/contactRoutes");

// Use the contact route with the correct path
app.use("/api/contact", contactRoutes);

// Start the server
const PORT = 5002;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
