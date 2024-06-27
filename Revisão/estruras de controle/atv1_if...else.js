const prompt = require("prompt-sync")();
let numero = prompt("Escreva um número: ");
{
  if (numero > 5) {
    console.log("o número é maior que 5");
  } else {
    console.log("O número é menor que 5");
  }
}
