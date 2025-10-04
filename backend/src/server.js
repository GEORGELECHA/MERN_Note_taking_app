import express from "express"; // common js
import dotenv from "dotenv";
import cors from "cors";

import noteRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

// const express = require("express"); //eschema script

const app = express();
const PORT = process.env.PORT || 5001


//middleware

app.use(cors({
    origin: "http://localhost:5173", // Allow requests from any origin (you can specify your frontend URL here)

})); // Enable CORS for all routes to prevemt CORS errors

app.use(express.json());// this middleware will parse JSON bodies: req.body

app.use(rateLimiter); // checks if user can send a request or should we return an error message


//Arrangment of the middlewares is important. For example, if we put the rateLimiter after the routes, it won't work as intended.
//because the routes would have already been processed before reaching the rateLimiter middleware.
//So, always put the rateLimiter before the routes to ensure it can effectively limit incoming requests.








app.use("/api/notes", noteRoutes); //this one helps to avoid repeating the route: (/api/notes) while defining all the other routes


//This connects to the database and then starts the server

connectDB().then(() => {
    app.listen(PORT, () => {
    console.log('Server started on PORT: ', PORT);
    });
});



