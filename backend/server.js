import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware (optional for now)
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("✅ Backend is working!");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
