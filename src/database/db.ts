import { MongoClient } from "mongodb"
import * as mongoDB from "mongodb";

const uri = process.env.DB_CONN_STRING;

export const client = new MongoClient(`${uri}`);
export const collections: { receitas?: mongoDB.Collection } = {}