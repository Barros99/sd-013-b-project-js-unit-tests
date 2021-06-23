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
    assert.strictEqual(Array.isArray(productDetails('Alcool gel', 'Máscara')), true);

    // Teste que o array retornado pela função contém dois itens dentro.
    let array = productDetails('Alcool gel', 'Máscara');
    assert.strictEqual(array.length, 2);

    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof array[0], 'object');
    assert.strictEqual(typeof array[1], 'object');

    // Teste que os dois objetos são diferentes entre si.
     let verificar = (n1, n2) => {
      if (n1 === n2){
        return false;
      }
      return true;
    }
    assert.strictEqual(verificar(array[0],array[1]), true);

    // Teste que os dois productIds terminam com 123.
    let textOne = productDetails('Alcool gel', 'Máscara')[0].details.productId;
    let textTwo = productDetails('Alcool gel', 'Máscara')[0].details.productId;
    let resultOne = textOne.indexOf('123') > -1;
    let resultTwo = textTwo.indexOf('123') > -1;

    assert.strictEqual((resultOne && resultTwo), true);
  });
});
