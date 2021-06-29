const assert = require('assert');
const { truncate } = require('fs');
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
    // assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    const product = (productDetails('product1', 'product2'));
    (productDetails('product1', 'product2'))[1]
    // Teste que o retorno da função é um array.
    assert.deepStrictEqual((Array.isArray(product)), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual(product.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof product[0], 'object');
    assert.deepStrictEqual(typeof product[1], 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.deepStrictEqual(product[0] !== product[1], true)
    // Teste que os dois productIds terminam com 123.
    assert.deepStrictEqual(product[0].details.productId.endsWith('123'), true);
    assert.deepStrictEqual(product[1].details.productId.endsWith('123'), true);
});
});
