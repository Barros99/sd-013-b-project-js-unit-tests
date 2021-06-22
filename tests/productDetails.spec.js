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
    // Teste que o retorno da função é um array.
    assert.strictEqual(Array.isArray(productDetails('Alcool', 'Máscara')), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual(productDetails('Alcool', 'Máscara').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof productDetails('Alcool', 'Máscara'), 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(productDetails('Alcool', 'Máscara'), true);
    // Teste que os dois productIds terminam com 123.
    // Tópico que me ajudou nessa questão (var.slice) https://stackoverflow.com/questions/5873810/how-can-i-get-last-characters-of-a-string
    const productId1 = (productDetails('Alcool', 'Máscara')[0].details.productId);
    const productId2 = (productDetails('Alcool', 'Máscara')[1].details.productId);
    assert.deepStrictEqual(productId1.slice(productId1.length - 3) === productId2.slice(productId2.length - 3), true);
  });
});
