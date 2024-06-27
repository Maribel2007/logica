let soma = 0;

function somass(arr = []) {
  for (let i = 0; i < arr.length; i++) {
    soma = soma + arr[i];
  }
}
const retorno = somass((arr = [1, 2, 3, 4, 5]));
console.log(soma);
