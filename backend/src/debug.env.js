import dotenv from "dotenv";

console.log("=== DEBUGGING ===");
console.log("Current directory:", process.cwd());

dotenv.config();

console.log("MONGO_URI loaded:", !!process.env.MONGO_URI);
console.log("MONGO_URI value:", process.env.MONGO_URI || "NOT FOUND");

// Check if file exists
import fs from "fs";
console.log(".env file exists:", fs.existsSync(".env"));