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
const somar = (num1, num2) => parseInt(num1 + num2, 10);
const multiplicar = (num1, num2) => parseInt(num1 * num2, 10);
const dividir = (num1, num2) => parseInt(num1 / num2, 10);
const subtrair = (num1, num2) => parseInt(num1 - num2, 10); 

const calculator = {
  add: somar,
  mult: multiplicar,
  div: dividir,
  sub: subtrair,
};

console.log(calculator.add(91, 1));
module.exports = calculator;
