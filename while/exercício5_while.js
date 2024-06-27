const prompt = require("prompt-sync")();

const user = "belzinha123";
const senha = "123456";

while (true) {
  const us = prompt("Escreva o user: ");
  const se = prompt("Escreva a senha: ");

  if (us == user && se == senha) {
    console.log("Login realizado com sucesso ");
  } else {
    console.log("dados incorretos ");
  }
}
