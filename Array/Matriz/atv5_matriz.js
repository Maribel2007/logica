const numbers = [
  [10, 20, 60],
  [8, 10, 52],
];

let m = [];

for (let i = 0; i < numbers.length; i++) {
  let multiplicação = 1;
  for (let o = 0; o < numbers[i].length; o++) {
    multiplicação = multiplicação * numbers[i][o];
  }
  m.push(multiplicação);
}
console.log(m);
