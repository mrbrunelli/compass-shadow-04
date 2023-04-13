import { Db, MongoClient } from "mongodb";

const uri = process.env.DB_CONN_STRING;

const client = new MongoClient(`${uri}`);

export async function openConnection() {
  await client.connect();
}

export function getConnection(): Db {
  return client.db(process.env.DB_NAME);
}

export async function closeConnection() {
  await client.close();
}
