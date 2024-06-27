const prompt = require("prompt-sync")();
let i = 1;
let num = Number(prompt("Qual o fatorial desse número: "));
let fato = num;

do {
  fato = fato * i;
  {
    console.log(fato);
  }
  i++;
} while (i < num);

//var fatorial = 5;
//var resultado = fatorial;
//for (var i = 1; i < fatorial; i++) {
//  resultado *= i;
//}
//console.log(resultado);
