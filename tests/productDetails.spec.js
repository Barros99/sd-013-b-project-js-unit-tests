const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:

    // Teste que o retorno da função é um array. [ok]
    assert.deepStrictEqual(typeof productDetails(), 'object');

    // Teste que o array retornado pela função contém dois itens dentro. [ok]
    assert.deepStrictEqual(productDetails().length, 2);

    // Teste que os dois itens dentro do array retornado pela função são objetos. [ok]
    assert.deepStrictEqual(typeof productDetails('produto1', 'produto2'), 'object');

    // Teste que os dois objetos são diferentes entre si.
    const produtos = productDetails('a', 'b');
    // retorna um 'array' contendo apenas o 'valor' do objeto details de propriedade: productId, do índice 0/1 do array retornado pela função
    const valueProductIdArray1 = Object.values(produtos[0].details);
    const valueProductIdArray2 = Object.values(produtos[1].details);
    // converto esse retorno de array para string
    const valueProductIdString1 = valueProductIdArray1.toString();
    const valueProductIdString2 = valueProductIdArray2.toString();
    // faço a comparação de uma string pela outra
    const compare = valueProductIdString1.includes(valueProductIdString2);
    // verifico o requisito
    assert.deepStrictEqual(compare, false);

    // Teste que os dois productIds terminam com 123.
    const endProduct1 = valueProductIdString1.slice(-3);
    const endProduct2 = valueProductIdString2.slice(-3);

    assert.deepStrictEqual(endProduct1, '123');
    assert.deepStrictEqual(endProduct2, '123');
  });
});
