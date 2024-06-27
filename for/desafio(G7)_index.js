const prompt = require("prompt-sync")();
let rep = prompt("Adicione um número: ");

for (let i = 1; i <= rep; i++) {
  console.log(" ".repeat(rep - i), "hi".repeat(i + i - 1));
}
