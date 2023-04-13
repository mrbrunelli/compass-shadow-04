import express, { Request, Response } from "express";
import { getConnection } from "../database/db";
import { Receita } from "../models/Receita";
import { ReceitaRepository } from "../repository/ReceitaRepository";
import { ReceitaService } from "../services/ReceitaService";

const receitaController = express.Router();

const receitaService = new ReceitaService(
  new ReceitaRepository(getConnection())
);

receitaController.post("/receitas", async (req: Request, res: Response) => {
  try {
    const receita: Receita = req.body;
    const receitaSalva = await receitaService.cadastra(receita);
    return res
      .status(201)
      .set("Location", `/receitas/${receitaSalva._id}`)
      .send();
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

receitaController.get("/receitas", async (req: Request, res: Response) => {
  try {
    const receitas = await receitaService.lista();
    return res.status(200).json(receitas);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

export { receitaController };
