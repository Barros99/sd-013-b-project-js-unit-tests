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

const average = () => {
  // adicione a implementação aqui
  for (let index = 0; index < average.length; index += 1) {
    let inputValues = average[index];
    let soma = 0;
    soma += (average[index]);
    let media = soma / average.length;
  }
  if (typeof (average) !== 'number' || average === '') {
    return undefined;
  }
};

module.exports = average;
