const prompt = require("prompt-sync")();
const i = 10;

while (true) {
  const n = Number(prompt("Adicione um número: "));
  {
    if (n == i) {
      console.log("Parabéns você acertou o número!");
      break;
    }

    if (n !== i && n < i) {
      console.log("aumente ", i - n);
      break;
    }
    if (n !== i && n > i) {
      console.log("diminua", n - i);
      break;
    }
  }
}
