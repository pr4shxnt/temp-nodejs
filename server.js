const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./Setup/db");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());



// ✅ Connect to Database
connectDB();

// ✅ Local Server Only (Prevents Issues in Vercel)
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}/`);
  });
}

// ✅ Export app for Vercel
module.exports = app;