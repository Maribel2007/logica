const carro = {
  marca: "HB",
  modelo: "20",
  ano: 2026,
  cor: "branco",
};

carro.cor = "jacinto";
carro.condicao = "novinho em folha";
delete carro.ano;

console.log(carro);
