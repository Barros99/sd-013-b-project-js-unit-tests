/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.

  Parâmetros:
    - Uma string;
    - Um número.
  Comportamento:
    vqv(Tunico, 30) // Retorna:
      'Oi, meu nome é Tunico!
      Tenho 30 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!'
*/

// me ajudou a pensar em como descobrir se a função foi chamada sem parâmetros https://stackoverflow.com/questions/13019640/how-to-test-if-a-parameter-is-provided-to-a-function

const vqv = (nome, idade) => {
  if (nome === undefined || idade === undefined) return undefined;

  return `Oi, meu nome é ${nome}!
Tenho ${idade} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;  
};

console.log(vqv());

module.exports = vqv;
