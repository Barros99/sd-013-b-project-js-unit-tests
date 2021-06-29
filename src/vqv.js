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
  // se tiver ALGUM parâmetro
  if (nome && idade !== undefined) {
    let texto = `Oi, meu nome é ${nome}!\n`
    + `Tenho ${idade} anos,\n` 
    + 'trabalho na Trybe e mando muito em programação!\n'
    + '#VQV!';

    return texto; 
  }
  // se não tiver NENHUM parâmetro
  return undefined;
};

//console.log(vqv('luis', 10));

module.exports = vqv;


