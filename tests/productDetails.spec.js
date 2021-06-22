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
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails().length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const result1 = productDetails();
    assert.deepStrictEqual(
      [typeof result1[0], typeof result1[1]],
      ['object', 'object'],
    );
    // Teste que os dois objetos são diferentes entre si.
    const result2 = productDetails('Alcool gel', 'Máscara');
    assert.notDeepStrictEqual(result2[0], result2[1]);
    // Teste que os dois productIds terminam com 123.
    const result3 = productDetails('Alcool gel', 'Máscara');
    const id1 = result3[0].details.productId;
    const id2 = result3[1].details.productId;
    assert.notStrictEqual(id1.match(/123$/g).length, 0);
    assert.notStrictEqual(id2.match(/123$/g).length, 0);
  });
});
