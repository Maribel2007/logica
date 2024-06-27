const prompt = require("prompt-sync")();
const idade = prompt("Qual a sua idade? ");

{
  if (idade >= 18) {
    console.log("você é maior de idade");
  } else {
    console.log("você é menor de idade");
  }
}
