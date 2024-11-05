import express, { Express, Request, Response } from "express"
import dotenv from "dotenv";
import cors from "cors";
import { data } from "./data";

dotenv.config();

const app = express();
const port = process.env.PORT || 3500;
const host = process.env.HOST || "0.0.0.0";

app.use(cors());

app.get("/", (req, res) => {
    res.json(data);
})

app.listen(port, () => {
    console.log(`[server]: Server is listening on http://${host}:${port}`);
})