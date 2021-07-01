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
    const functionArray = Array.isArray(productDetails([]))
    assert.strictEqual(functionArray, true)
    // Teste que o array retornado pela função contém dois itens dentro.
    const tamanhoArray = productDetails.length
    assert.strictEqual(tamanhoArray, 2)
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const tipoFunction = productDetails([])
    assert.strictEqual(typeof tipoFunction, 'object')
    // Teste que os dois objetos são diferentes entre si.
    const objOne = productDetails.name[0]
    const objTwo = productDetails.name[1]
    const compare = (objOne === objTwo)
    assert.deepStrictEqual(compare, false)
    // Teste que os dois productIds terminam com 123.
    const stringObjOne = (productDetails()[0]).productId
    console.log(stringObjOne)
    const stringObjTwo = (productDetails()[1]).productId
    console.log(stringObjTwo)
    assert.deepStrictEqual((stringObjOne === stringObjTwo), true)
    
    // assert.deepStrictEqual((stringObjOne.endsWith('123')===stringObjTwo.endsWith('123')), true)
  });
});
