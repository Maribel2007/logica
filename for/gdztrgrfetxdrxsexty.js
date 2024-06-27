const prompt = require("prompt-sync")();
let numero = prompt("Coloque um número ");
let cont = 0;

for (let i = 1; i <= numero; i++) {
  if (numero % i == 0) cont++;
}
if (cont == 2) {
  console.log("é primo");
} else if (cont !== 2) {
  console.log("não é primo");
}
