const prompt = require("prompt-sync")();

/*
  Exemplo do Objeto da Tarefa
  {
    id: number,
    tarefa: string,
    marcada: boolean
  }
*/

const lista = [];

console.clear();

function mostrarLista() {
  console.log(lista);
}
///////////////////////////////
function adicionarTarefa() {
  const tarefa = prompt("Digite sua tarefa: ");

  lista.push({
    id: lista.length + 1,
    tarefa: tarefa,
    marcaa: false,
  });
}
/////////////////////////////////
function marcarTarefa() {
  const id = prompt("igite o ID de umatarefa: ");

  for (let i = 0; i < lista.length; i++)
    if (lista[i].id == id) {
      lista[i].marcada = true;
    }
}

function removerTarefa() {
  const id = prompt("Digite o ID de uma tarefa para remover: ");
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].id == id) {
      lista.splice(i, 1);
    }
  }
}

function continuar() {
  prompt.hide("pressione Enter para continuar ...");
}

while (true) {
  console.log(
    `MENU
    1 - ver lista
    2 - adicionar tarefa
    3 - marcar tarefa
    4 - remover tarefa
    5 - encerrar`
  );

  const option = Number(prompt("Digite a opção: "));

  if (option === 5) {
    console.clear();
    console.log("Programa encerrado!");
    break;
  }

  console.clear();

  switch (option) {
    case 1:
      mostrarLista();
      continuar();
      break;
    case 2:
      adicionarTarefa();
      continuar();
      break;
    case 3:
      marcarTarefa();
      continuar();
      break;
    case 4:
      removerTarefa();
      continuar();
      break;
    default:
      console.log("Opção inválida");
      continuar();
  }

  console.clear();
}
