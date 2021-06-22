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
  if (nome === '' || idade === undefined) return undefined;

  const p1 = `Oi, meu nome é ${nome}!\n`;
  const p2 = `Tenho ${idade} anos,\n`;
  const p3 = 'trabalho na Trybe e mando muito em programação!\n';
  const p4 = '#VQV!';
  
  return p1 + p2 + p3 + p4;
};

module.exports = vqv;
