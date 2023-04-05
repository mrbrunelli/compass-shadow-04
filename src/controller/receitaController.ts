import express, { Router } from "express";

import { validaReceita, IReceita } from "../services/receitaService";
import { buscaReceitas } from "../repository/receitaRepository"

export const router = express.Router();

router.post("/receita", async (req,res)=>{
    const receita: IReceita = req.body;
    await validaReceita(receita);
})

router.get("/receitas", async ()=>{
    await buscaReceitas();
})

