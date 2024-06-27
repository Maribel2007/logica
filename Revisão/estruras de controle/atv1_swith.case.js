const prompt = require("prompt-sync")();
const letra = String(prompt("Escreva uma letra "));

switch (true) {
  case letra == "a" || letra == "A":
    console.log("letra", letra, "digitada");
    break;
  case letra == "b" || letra == "B":
    console.log("letra", letra, "digitada");
    break;
  default:
    console.log(
      "o prazo para as atividades está entre a letra G e K do teclado"
    );
}
