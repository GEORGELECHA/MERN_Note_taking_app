import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function testMongoDB() {
    console.log("=== Testing MongoDB Connection ===");
    console.log("MONGO_URI:", process.env.MONGO_URI ? "Loaded" : "Not loaded");
    
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 10000,
            socketTimeoutMS: 45000,
        });
        
        console.log("✅ MongoDB Connected Successfully!");
        console.log("Host:", conn.connection.host);
        console.log("Database:", conn.connection.name);
        
        await mongoose.connection.close();
        process.exit(0);
    } catch (error) {
        console.log("❌ MongoDB Connection Failed:");
        console.log("Error Name:", error.name);
        console.log("Error Message:", error.message);
        console.log("Error Code:", error.code);
        
        process.exit(1);
    }
}

testMongoDB();