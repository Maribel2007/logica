const prompt = require("prompt-sync")();
const num1 = Number(prompt("Escreva um número: "));
const num2 = Number(prompt("Escreva mais um número: "));
let maior;
let menor;
let opera = prompt(
  "Qual operação você gostaria de realizar: adição, subtração, multiplicação ou divisão? "
);

if (num1 > num2) {
  num1 == maior && num2 == menor;
} else if (num2 > num1) {
  num2 == maior && num1 == menor;
}

switch (true) {
  case opera == "adicao":
    console.log(num1 + num2);
    break;
  case opera == "divisao":
    console.log(maior / menor);
    break;
  case opera == "multiplicacao":
    console.log(maior * menor);
    break;
  default:
    console.log(maior - menor);
}
