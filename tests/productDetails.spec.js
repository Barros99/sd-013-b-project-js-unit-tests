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
    
    const test1 = productDetails('Isopor', 'Computador')
    assert.strictEqual(Array.isArray(test1), true);

    // Teste que o array retornado pela função contém dois itens dentro.

    const test2 = productDetails('Garrafa de água', 'Balão').length;
    assert.strictEqual(test2, 2);

    // Teste que os dois itens dentro do array retornado pela função são objetos.

    const test3 = [typeof productDetails('Par de Luvas', 'Borracha')[0],
                  typeof productDetails('Par de Luvas', 'Borracha')[1]];
    assert.deepStrictEqual(test3, ['object', 'object']);

    // Teste que os dois objetos são diferentes entre si.

    const test4 = productDetails('Carro', 'Caderno')[0] !== productDetails('Carro', 'Caderno')[1];
    assert.strictEqual(test4, true);

    // Teste que os dois productIds terminam com 123.

    const test5 = [productDetails('Balde', 'Cano')[0].details.productId.slice(-3), productDetails('Balde', 'Cano')[1].details.productId.slice(-3)];
    assert.deepStrictEqual(test5, ['123', '123']);

  });
});
