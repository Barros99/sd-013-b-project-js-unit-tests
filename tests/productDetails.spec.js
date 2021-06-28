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
    // assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.deepStrictEqual(productDetails('Máscara', 'Álcool em gel'), 
    [
      { name: 'Máscara', details: { productId: 'Máscara123' } },
      { name: 'Álcool em gel', details: { productId: 'Álcool em gel123' } }
    ]);    
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual(Object.keys(productDetails('Máscara', 'Álcool em gel')).length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof (Object.keys(productDetails('Máscara', 'Álcool em gel'))), 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(Object.values(productDetails('Máscara', 'Álcool em gel')[0]), Object.values(productDetails('Máscara', 'Álcool em gel')[1]));
    // Teste que os dois productIds terminam com 123.
    const Id1 = productDetails('Máscara', 'Álcool em gel')[0].details.productId;
    const Id2 = productDetails('Máscara', 'Álcool em gel')[1].details.productId;
    const numbersId1 = Id1[Id1.length - 3] + Id1[Id1.length - 2] + Id1[Id1.length - 1];
    const numbersId2 = Id2[Id2.length - 3] + Id2[Id2.length - 2] + Id2[Id2.length - 1];

    assert.deepStrictEqual(numbersId1, '123');
    assert.deepStrictEqual(numbersId2, '123');
  });
});
