let i = 1;
let soma = 0;

do {
  if (i % 2 !== 0) {
    soma = soma + i;
    {
      console.log(i);
    }
  }
  i++;
} while (i <= 100);
console.log("a soma é", soma);
