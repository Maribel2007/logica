const prompt = require("prompt-sync")();
let i = 1;
let num = Number(prompt("Qual o fatorial desse número: "));
let fato = 0;

do {
  fato = fato + num * (num - 1);
  {
    console.log(fato);
  }
  i--;
} while (i <= num);
