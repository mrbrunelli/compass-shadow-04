import { request, response } from "express"
import { ObjectId } from "mongodb"
import { cadastraReceita } from "../repository/receitaRepository"


interface Autor{
    name: String,
    email: String
  }
  

interface IReceita{
    id?:ObjectId,
    name: string,
    ingredients: string,
    preparation: string,
    recipeAuthor: Autor
}

export async function validaReceita(receita:IReceita) {
    cadastraReceita(receita);
}

export {IReceita}