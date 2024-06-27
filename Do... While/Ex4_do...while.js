const prompt = require("prompt-sync")();
let i = 1;
let cont = 0;
let numero = Number(prompt("Esse número é primo? "));

do {
  if (numero % i == 0) {
    cont++;
  }
  i++;
} while (i <= numero);

if (cont > 2) {
  console.log("não é um número primo");
} else {
  console.log("é um número primo");
}
