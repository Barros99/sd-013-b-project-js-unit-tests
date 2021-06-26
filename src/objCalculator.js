/*
  Desenvolva um objeto calculator que possui quatro chaves:
    - add;
    - mult;
    - div;
    - sub.
  Para cada uma delas atribua uma função que realiza a respectiva operação.
  A função deve receber dois inteiros e retornar um inteiro.
  Os resultados das divisões devem sempre ser arredondados para baixo.

  Faça as funções com arrow functions!

  Parâmetros:
  - Um número inteiro;
  - Um número inteiro;

  Comportamento:
  calculator.add(1, 1) // Retorno: 2;
  calculator.div(3, 2) // Retorno: 1;
*/

const calculator = {
  add: (num, num2) => {
    return Math.floor(num + num2);
  },
  mult: (num, num2) => {
    return Math.floor(num * num2);
  },
  div: (num, num2) => {
    return Math.floor(num / num2);
  },
  sub: (num, num2) => {
    return Math.floor(num - num2);
  }
};
console.log(calculator.add(2.5,5));
console.log(calculator.mult(2.5,5));
console.log(calculator.div(3,2));
console.log(calculator.sub(2.5,5));

module.exports = calculator;
