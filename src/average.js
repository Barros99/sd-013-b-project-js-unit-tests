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

  // Busquei um método para avaliar todos os ítems de um array e achei o prototype every().
  // Outro médodo encontrado foi Math.round para arredondar valores.

const average = (arr) => {
let arrSum = 0;
const arrTypeIsNumber = (arrIndex) => typeof arrIndex === 'number'; // verifica o tipo 'number'.

if (arr.every(arrTypeIsNumber) && arr.length > 0) {
  for (let index = 0; index < arr.length; index += 1) {
    arrSum += arr[index];       
  }
  let arrAverage = Math.round(arrSum / (arr.length));
  return arrAverage;
  }
  return undefined;
};

/* console.log(average([2, 4, 6, 7, 8]));
console.log(average([2, '4', 6, 7, 8])); */

module.exports = average;
