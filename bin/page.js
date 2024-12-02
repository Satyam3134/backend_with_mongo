import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

// Initialize dotenv
dotenv.config();

export const app = express();

// Middleware to parse JSON
app.use(express.json());

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};
// app.get("/", (req, res) => {
//   res.send("Hello bois");
// });

app.listen(8000, () => {
  console.log("Server is runing at 8000");
});
