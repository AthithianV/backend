import mongoose from "mongoose";

const uri = `mongodb+srv://root:athithian@athithian.vhxrl6a.mongodb.net/?retryWrites=true&w=majority&appName=Athithian`;



const connectToMongoDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error);
        console.error("Error Occured While connecting to MongoDB");
    }
}

export default connectToMongoDB;