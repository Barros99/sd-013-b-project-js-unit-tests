/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (myArray) => {
  if (myArray.length === 0) {
    return undefined;
  }
  let averageOfArray = 0;
  let sumOfElementsOfArray = 0;
  for (let index = 0; index < myArray.length; index += 1) {
    if (typeof (myArray[index]) !== 'number') {
      return undefined;
    }
    sumOfElementsOfArray += myArray[index];
  }
  averageOfArray = sumOfElementsOfArray / myArray.length;
  return Math.round(averageOfArray);
};
console.log(average([0,0,0,0,0,0,0,0,0,1]));
module.exports = average;
