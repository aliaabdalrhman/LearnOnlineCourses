import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.DB_LOCAL);
        console.log("db connection established");
    }
    catch (error) {
        console.log("Error connecting to database", error);
    }
}
export default connectDb;