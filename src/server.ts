import express from "express"
import dotenv from "dotenv";
import cors from "cors";
import todoRoutes from "./routes/todos";
import connectDB from "./db";

dotenv.config();

const app = express();
const port = process.env.PORT || 3500;
const host = process.env.HOST || "0.0.0.0";

app.use(cors());

app.use("/", todoRoutes);

connectDB();

app.listen(port, () => {
    console.log(`[server]: Server is listening on http://${host}:${port}`);
})