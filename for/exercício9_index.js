const prompt = require("prompt-sync")();
let maior;
let menor;

for (let i = 0; i < 5; i++) {
  const x = Number(prompt("Digite um número: "));

  if (i == 0) {
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
}
console.log("maior número é: ", maior);
console.log("menor número é: ", menor);
