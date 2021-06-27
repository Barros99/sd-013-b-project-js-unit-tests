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
const sum = (numbers) => {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
};

const checkDefined = (numbers) => {
  if (numbers.length < 1) {
    return 'notNumber';
  }

  for (let num of numbers) {
    if (typeof (num) !== 'number') {
      return 'notNumber';
    }
  }
};

const average = (numbers) => {
  const total = Math.round(sum(numbers) / numbers.length);
  const result = checkDefined(numbers) === 'notNumber' ? undefined : total;

  return result;
};

module.exports = average;
