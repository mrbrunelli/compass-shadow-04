import { ObjectId } from "mongodb";
import { Autor } from "./Autor";

export interface Receita {
  _id?: ObjectId;
  name: string;
  ingredients: string;
  preparation: string;
  recipeAuthor: Autor;
}
