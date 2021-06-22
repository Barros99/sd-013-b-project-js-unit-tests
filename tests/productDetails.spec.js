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
    assert.strictEqual(Array.isArray(productDetails()), true);
    // Após pesquisa, descobri o método Array.isArray(). Link de referência: https://pt.stackoverflow.com/questions/77190/como-saber-se-um-objeto-%C3%A9-um-array-em-javascript-sem-jquery
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails().length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof(productDetails()[0]), 'object');
    assert.strictEqual(typeof(productDetails()[1]), 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notStrictEqual(productDetails()[0], productDetails()[1]);
    // Teste que os dois productIds terminam com 123.
    assert.strictEqual(productDetails()[0].details.productId.endsWith('123'), true);
    assert.strictEqual(productDetails()[1].details.productId.endsWith('123'), true);
    // Após pesquisa, descobri o método endsWith(). Link de referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
  });
});
