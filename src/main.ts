import "dotenv/config";
import express from "express";
import { receitaController } from "./controller/ReceitaController";
import { openConnection } from "./database/db";

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(receitaController);

openConnection()
  .then(() => {
    console.log("Banco de dados conectado");
    app.listen(port, () => {
      console.log(`Servidor escutando em http://localhost:${port}`);
    });
  })
  .catch((e) => {
    console.log(`Erro ao conectar banco de dados ${e.message}`);
  });
