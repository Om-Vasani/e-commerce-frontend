const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { dbName: "shopease" });
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    rocess.exit(1);
  }
};

module.exports = connectDB;
