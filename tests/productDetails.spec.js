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
    const productArray = productDetails('Alcool gel', 'Máscara');
    // Teste que o retorno da função é um array.
    assert.strictEqual(typeof productDetails(), 'object');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails().length, 2);    
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof productArray[0], 'object', 'Erro: o primeiro produto não é um objeto');
    assert.strictEqual(typeof productArray[1], 'object', 'Erro: o segundo produto não é um objeto'); 
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(productArray[0], productArray[1], 'Erro: os produtos são iguais');
    // Teste que os dois productIds terminam com 123.
    const endFirstObject = productArray[0];
    const endSecondObject = productArray[1];
    assert.deepStrictEqual(endFirstObject.details.productId.endsWith('123'),
    endSecondObject.details.productId.endsWith('123'),
    'Erro: ID(s) do(s) produto(s) com terminação diferente de 123');
  });
});
