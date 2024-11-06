import express from "express";
import Todo from "../models/Todo";
import { data } from "../data";

const router = express.Router();

router.get("/", async (req, res) => {
    try {

        // Insert test data
        const count = await Todo.countDocuments();
        if (count === 0)
            await Todo.create(data);

        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

export default router;