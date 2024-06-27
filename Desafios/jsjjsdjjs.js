const prompt = require("prompt-sync")();
const num1 = Number(prompt("Escreva um número: "));
const num2 = Number(prompt("Escreva mais um número: "));
let opera = prompt(
  "Qual operação você gostaria de realizar (adi,sub,div,mult): "
);

//////////// usar while

switch (true) {
  case opera == "adi":
    console.log(num1 + num2);

  case opera == "div":
    console.log(num1 / num2);
  case opera == "mult":
    console.log(num1 * num2);
    break;
  case opera == "sub":
    console.log(num1 - num2);
    break;
  default:
    console.log("opção inválida");
}
