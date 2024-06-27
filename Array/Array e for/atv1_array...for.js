let par = [];
let impar = [];

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    par.push(i);
  } else {
    impar.push(i);
  }
}
console.log(par, impar);
