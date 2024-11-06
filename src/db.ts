import mongoose from "mongoose";

const connectDB = async () => {
    const {
        MONGO_HOST,
        MONGO_PORT,
        MONGO_DATABASE,
        MONGO_INITDB_ROOT_USERNAME,
        MONGO_INITDB_ROOT_PASSWORD,
    } = process.env;
    
    const mongoURI = `mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}?authSource=admin`;

    run().catch(err => console.log(err));

    async function run() {
        const conn = await mongoose.connect(mongoURI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
};

export default connectDB;