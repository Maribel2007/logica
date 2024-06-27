const prompt = require("prompt-sync")();
let i = 1;
let num = Number(prompt("Qual o fatorial desse número: "));
let fato = num;

do {
  fato = fato * i;
  console.log(fato);
  i++;
} while (i < num);

/////////////////////////////////////////////////////////////////////////////////////////////

let resultado = num;
let index = num - 1;

do {
  resultado = resultado * index;
  console.log(resultado);
  index--;
} while (index >= 1);
