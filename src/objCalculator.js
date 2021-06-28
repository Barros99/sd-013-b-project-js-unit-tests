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
  add: (n1, n2) => {
    if (!Number.isInteger(n1) || !Number.isInteger(n2)) {
      return false;
    }
    return n1 + n2;
  },

  mult: (n1, n2) => {
    if (!Number.isInteger(n1) || !Number.isInteger(n2)) {
     return false;
    }
    return n1 * n2;
  },

  div: (n1, n2) => {
    if (!n2) return false;
    if (!Number.isInteger(n1) || !Number.isInteger(n2)) {
      return false;
    }
    return Math.floor(n1 / n2);
  },

  sub: (n1, n2) => {
    if (!Number.isInteger(n1) || !Number.isInteger(n2)) {
      return false;
    }
    return n1 - n2;
  },

};
console.log(calculator.add(1, 2));
console.log(calculator.sub(1, 2));
console.log(calculator.mult(1, 2));
console.log(calculator.div(1, 2));
console.log(calculator.div(2, 2));

module.exports = calculator;
