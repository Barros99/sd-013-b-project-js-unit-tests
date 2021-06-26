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
    
    const produto = productDetails('Alcool gel', 'Máscara');
    assert.strictEqual(typeof produto, 'object'); // Teste que o retorno da função é um array.
    assert.strictEqual(Object.keys(produto).length, 2);// Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(typeof produto[0, 1], 'object'); // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.notStrictEqual(produto[0], produto[1]);// Teste que os dois objetos são diferentes entre si.
    
    const palavra1 = produto[0].details.productId; // Teste que os dois productIds terminam com 123.
    const palavra2 = produto[1].details.productId; 
    assert.strictEqual(palavra2.substr(-3), '123');
    assert.strictEqual(palavra1.substr(-3), '123');
  });
});
