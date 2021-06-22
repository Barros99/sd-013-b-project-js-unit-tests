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

function verifyArrayLength(arrayGiven) {
  if (arrayGiven.length < 1) {
    return false;
  }
  return true;
}

function verifyArrayValues(arrayGiven) {
  for (let value of arrayGiven) {
    if (typeof (value) !== 'number') {
      return false;
    }
  }
  return true;
}

const average = (arrayGiven) => {
  if (verifyArrayLength(arrayGiven) && verifyArrayValues(arrayGiven)) {
    let sum = 0;
    for (let value of arrayGiven) {
      sum += value;
    }
    const arrayAverage = sum / arrayGiven.length;
    return (Math.round(arrayAverage));
  }
  return undefined;
};

module.exports = average;
