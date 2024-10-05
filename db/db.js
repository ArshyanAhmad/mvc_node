import mongoose from "mongoose";
import "dotenv/config";

export const connectDB = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log("Database is connected");
    })
    .catch((error) => {
        console.log(`Error occured while connecting database ${error.message}`);
    })

}