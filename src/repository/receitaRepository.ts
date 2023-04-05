import { Response } from "express";
import { client, collections } from "../database/db";
import { IReceita } from "../services/receitaService"


export async function cadastraReceita(receita: IReceita) {
    await client.connect();
    const collection = client.db(`${process.env.DB_NAME}`).collection(`${process.env.COLLECTION_NAME}`);
    await collection.insertOne(receita);
}


export async function buscaReceitas(res: Response) {
    try {
        const receitas = (await collections.collections.find({}).toArray()) as IReceita[];
 
         res.status(200).send(receitas);
     } catch (error) {
         res.status(500).send(error.message);
     }
}