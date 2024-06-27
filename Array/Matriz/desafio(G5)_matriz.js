const numbers = [
  [10, 20, 30],
  [10, 20, 30],
];

let m = [];

for (let coluna = 0; coluna < numbers[0].length; coluna++) {
  let multiplicação = 1;
  for (let linha = 0; linha < numbers.length; linha++) {
    multiplicação = multiplicação * numbers[linha][coluna];
  }
  m.push(multiplicação);
}
console.log(m);
