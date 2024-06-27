const numbers = [
  [10, 20, 60],
  [8, 10, 52],
];
soma = 0;
for (let i = 0; i < numbers.length; i++) {
  for (let o = 0; o < numbers[i].length; o++) {
    soma = numbers[i][o] + soma;
  }
}
console.log(soma);
