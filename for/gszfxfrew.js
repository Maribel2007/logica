const prompt = require("prompt-sync")();
let n = prompt("adicione um número: ");
for (let i = 1; i <= n; i++) {
  console.log("*".repeat(i));
}
