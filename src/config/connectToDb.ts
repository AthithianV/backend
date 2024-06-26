import mongoose from "mongoose";


const url = "mongodb://localhost:27017/Bucket_List";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(url);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error Occured While connecting to MongoDB");
        
    }
}

export default connectToMongoDB;