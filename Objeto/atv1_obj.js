const pessoa = {
  nome: "Belzinha",
  idade: 16,
  profissao: "programadora do itaú",
  pais: "Brazil",
};
console.log(pessoa.nome);
console.log(pessoa.idade);

pessoa.profissão = "vendedora da shopee";
pessoa.email = "mariabelbel@gmail.com";

delete pessoa.país;

console.log(pessoa);
