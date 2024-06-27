const prompt = require("prompt-sync")();
const episodios = Number(prompt("Escreva um número: "));

switch (true) {
  case episodios >= 1 && episodios <= 10:
    console.log("série curta ");
    break;
  case episodios > 10 && episodios <= 100:
    console.log("série média ");
    break;
  case episodios > 100 && episodios <= 999:
    console.log("série longa ");
    break;
  case episodios >= 1000:
    console.log("One Piece");
    break;
  default:
    console.log("não existe");
}
