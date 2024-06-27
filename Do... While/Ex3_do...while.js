const prompt = require("prompt-sync")();
let maior;
let menor;
let i = 1;

do {
  const numero = Number(prompt("Digite um número: "));

  if (i == 1) {
    menor = numero;
    maior = numero;
  } else {
    if (numero > maior) {
      maior = numero;
    }

    if (numero < menor) {
      menor = numero;
    }
  }
  i++;
} while (i <= 10);

console.log("O maior número é: ", maior);
console.log("O menor número é: ", menor);
