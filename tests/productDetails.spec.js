const assert = require('assert');
const { type } = require('os');
const productDetails = require('../src/productDetails');
const _ = require('lodash');

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
    assert.deepStrictEqual(
      productDetails('some', 'thing') instanceof Array,
      true
    );
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('some', 'thing').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(
      typeof productDetails('some', 'thing')[0] === 'object' &&
        typeof productDetails('some', 'thing')[1] === 'object',
      true
    );
    // Teste que os dois objetos são diferentes entre si.
    assert.strictEqual(
      _.isEqual(
        productDetails('some', 'thing')[0],
        productDetails('some', 'thing')[1]
      ),
      false
    );
    // Teste que os dois productIds terminam com 123.
    assert.strictEqual(
      productDetails('some', 'thing')[0].details.productId.endsWith('123') &&
        productDetails('some', 'thing')[1].details.productId.endsWith('123'),
      true
    );
  });
});
