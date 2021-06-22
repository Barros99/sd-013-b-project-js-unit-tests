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

const checkSize = (array) => {
  if (array.length === 0) {
    return false;
  } return true;
};

const checkNumbers = (array) => {
  for (const element of array) {
    if (typeof element === 'string') {
      return false;
    }
  }
  return true;
};

const calcAverage = (array) => {
  let sum = 0;
  array.forEach((element) => {
    sum += element;
  });
  return sum / (array.length);
};

const average = (array) => {
  const size = checkSize(array);
  const numbers = checkNumbers(array);
  if (!size || !numbers) {
    return undefined;
  }
  return Math.round(calcAverage(array));
};

module.exports = average;
