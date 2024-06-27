const prompt = require("prompt-sync")();
const arr = [];

for (let i = 1; i < 5; i++) {
  let user = prompt("Escreva seu nome:");
  const obj = {
    id: i,
    nome: user,
  };
  arr.push(obj);
}

console.log(arr);
