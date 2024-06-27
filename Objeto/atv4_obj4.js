const dados = [
  {
    id: 1,
    nome: "Carlão Pedregulho",
  },
  {
    id: 2,
    nome: "Zezin Pão de forma",
  },
  {
    id: 3,
    nome: "Taccafaka Nopesh",
  },
];

for (let i = 0; i < dados.length; i++) {
  if (dados[i].id == 1) {
    console.log("minerador");
  } else if (dados[i].id == 2) {
    console.log("padeiro");
  } else if (dados[i].id == 3) {
    console.log("peixeiro");
  }
}

//inacabado
