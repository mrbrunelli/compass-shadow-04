import { Receita } from "../models/Receita";
import { ReceitaRepository } from "../repository/ReceitaRepository";

export class ReceitaService {
  constructor(private readonly receitaRepository: ReceitaRepository) {}

  async cadastra(receita: Receita) {
    validaReceita(receita);
    return this.receitaRepository.save(receita);
  }

  async lista() {
    return this.receitaRepository.findAll();
  }
}

function validaReceita(receita: Receita) {
  if (receita.ingredients.length == 0) {
    throw new Error("é necessário ter ao menos um ingrediente");
  }
}
