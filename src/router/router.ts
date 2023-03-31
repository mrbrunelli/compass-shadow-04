// External Dependencies
import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import Receita from "../models/Receita";



// Global Config
export const router = express.Router();

router.use(express.json());

// GET
router.get("/", async (_req: Request, res: Response) => {
    try {
       const receitas = (await collections.receitas.find({}).toArray()) as Receita[];

        res.status(200).send(receitas);
    } catch (error) {
        res.status(500).send(error.message);
    }
});
// POST

router.post("/", async (req: Request, res: Response) => {
    try {
        const newReceita = req.body as Receita;
        const result = await collections.receita.insertOne(newReceita);

        result
            ? res.status(201).send(`Successfully created a new receita with id ${result.insertedId}`)
            : res.status(500).send("Failed to create a new receita.");
    } catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }
});