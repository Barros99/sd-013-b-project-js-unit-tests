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
    const retorno = productDetails('Alcool gel', 'Máscara');
    assert.deepStrictEqual(typeof (retorno), 'object');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(retorno.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof (retorno[0]), 'object');
    assert.deepStrictEqual(typeof (retorno[1]), 'object');
    // Teste que os dois objetos são diferentes entre si.
    let comparacao = false;
    if (retorno[0] !== retorno[1]) {
      comparacao = true;
    }
    assert.strictEqual(comparacao, true);
    // Teste que os dois productIds terminam com 123.
    const str1 = retorno[0].details.productId.replace(/\D/gim, '');
    const str2 = retorno[1].details.productId.replace(/\D/gim, '');
    let comparacao1 = false;
    if (str1 === '123' && str2 === '123') {
      comparacao1 = true;
    }
    assert.deepStrictEqual(comparacao1, true);

  });
});
