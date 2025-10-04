
 import mongoose from "mongoose"


export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Bravoo! Server successfully connected to MONGOD");
    }

    catch (error){
        console.error("Error connecting to MONGODB", error);
    }
};




