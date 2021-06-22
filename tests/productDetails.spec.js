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
    assert.strictEqual(productDetails('Sabonete', 'Vassoura').constructor, Array);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('Sabonete', 'Vassoura').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const teste = productDetails('Sabonete', 'Vassoura');
    const itens = () => {
      let array = [];
      for (let index = 0; index < teste.length; index += 1) {
        array.push(typeof(teste[index]));
      }
      return array;
    }
    assert.deepStrictEqual(itens(), ['object', 'object']);
    // Teste que os dois objetos são diferentes entre si.
    const item1 = () => {
      for (let index = 0; index < teste.length; index += 1) {
        return teste[0];
      }
    }
    const item2 = () => {
      for (let index = 0; index < teste.length; index += 1) {
        return teste[2];
      }
    }
    assert.notDeepStrictEqual(item1, item2);
    // Teste que os dois productIds terminam com 123.
    const idProducts = () => {
      let array = [];
      for (let index = 0; index < teste.length; index += 1) {
        array.push(teste[index].details.productId.replace(/\D/g, ''));
      };
      return array;
    };
    assert.deepStrictEqual(idProducts(), ['123', '123']);
  });
});
