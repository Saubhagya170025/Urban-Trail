import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const DB_NAME = process.env.DB_NAME || "test";


const connectDB = async() =>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB Host : 
            ${connectionInstance.connection.host}`)
    } catch (error) {
        console.error("ERROR", error)
        process.exit(1)
    }
}

export default connectDB;


