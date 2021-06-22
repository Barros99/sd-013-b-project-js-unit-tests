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

const isValid = (array) => {
  let control = true;
  if (array.length === 0) {
    control = false;
  } 
  return control;
};

const isNumber = (array) => {
  let control = true;
  for (let index = 0; index < array.length; index += 1) {
    if (typeof (array[index]) !== 'number') {
      control = false;
      break;
    }
  }
  return control;
};

const average = (value) => {
  let cont = value.length;
  let control = 0;
  let valida = isValid(value);
  let number = isNumber(value);
  for (let index = 0; index < value.length; index += 1) {
    control += value[index];
  }
  let result = Math.round(control / cont);
  if (valida === false || number === false) {
    result = undefined;
  }
  return result;
};

module.exports = average;
