/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.
  o valor undefined deve ser retornado.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = () => {
  var i = 0;
  var sum = 0;
  var len = array.length;
  var media;
  while(i < len) {
    sum = sum = array[i += 1];
  }
  media = sum/len;

  return media;
// add implementation here

};

module.exports = average;
