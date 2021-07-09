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

const vqv = (nome, idade) => {
  let output1;
  let output2;
  let output3;
  let output4;
  let output5;
  if (nome !== undefined && idade !== undefined) {
    output1 = `Oi, meu nome é ${nome}!`;
    output2 = `Tenho ${idade} anos,`;
    output3 = 'trabalho na Trybe e mando muito em programação!';
    output4 = '#VQV!';
    output5 = `${output1}\n${output2}\n${output3}\n${output4}`;
  }
  return output5;
};

module.exports = vqv;
