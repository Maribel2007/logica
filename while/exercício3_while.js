const prompt = require("prompt-sync")();
let menor;
let maior;
let i = 1;

while (i <= 10) {
  const x = Number(prompt("Escreva um número: "));

  if (i == 1) {
    menor = x;
    maior = x;
  } else {
    if (x > maior) {
      maior = x;
    }

    if (x < menor) {
      menor = x;
    }
  }

  i++;
}
console.log("maior número é: ", maior);
console.log("menor número é: ", menor);
