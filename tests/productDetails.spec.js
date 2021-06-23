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
    assert.strictEqual(Object.entries(productDetails('Alcool gel', 'Máscara')).length, 2);

    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof(Object.entries(productDetails('Alcool gel', 'Máscara'))), 'object');

    // Teste que os dois objetos são diferentes entre si.
    let equality = () => {if ('Alcool gel' === 'Máscara') {return true} else {return false}};
    assert.strictEqual(equality(), false);

    // Teste que os dois productIds terminam com 123.
    let ids = productDetails('Alcool gel', 'Máscara');
    let idFunction = () => {
      for (let index = 0; index < ids.length; index += 1) {
        let id = ids[index].details.productId;
        if (id.endsWith('123')) {
          return true;
        } else {
          return false;
        }
      }
    } 
    assert.strictEqual(idFunction(), true);
  });
});
