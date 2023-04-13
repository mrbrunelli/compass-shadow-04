import { Collection, Db } from "mongodb";
import { Receita } from "../models/Receita";

export class ReceitaRepository {
  private readonly collection: Collection<Receita>;

  constructor(private readonly connection: Db) {
    this.collection = this.connection.collection<Receita>("receitas");
  }

  async save(receita: Receita): Promise<Receita> {
    const { insertedId } = await this.collection.insertOne(receita);
    receita._id = insertedId;
    return receita;
  }

  async findAll(): Promise<Receita[]> {
    const receitas = await this.collection.find({}).toArray();
    return receitas;
  }
}
