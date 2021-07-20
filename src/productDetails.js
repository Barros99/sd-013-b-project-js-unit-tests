/*
  Dadas duas strings que representam nomes de produtos,
  retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

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
*/

const assert = require('assert')

const productDetails = (firstProduct, secondProduct) => [
  {
    name: firstProduct,
    details: {
      productId: `${firstProduct}123`,
    },
  },
  {
    name: secondProduct,
    details: {
      productId: `${secondProduct}123`,
    },
  },
];

console.table(Object.keys(productDetails()));
  // Teste que o retorno da função é um array.
  assert.deepStrictEqual(Array.isArray(productDetails()), true);
  // Teste que o array retornado pela função contém dois itens dentro.
  assert.deepStrictEqual(productDetails().length, 2);
  // Teste que os dois itens dentro do array retornado pela função são objetos.
  const test = productDetails('Alcool gel', 'Máscara');
  assert.strictEqual(typeof (test[0]), 'object');
  assert.strictEqual(typeof (test[1]), 'object');
  // Teste que os dois objetos são diferentes entre si.
  assert.notDeepStrictEqual(test[0], test[1]);
  // Teste que os dois productIds terminam com 123.
  assert.strictEqual(test[0].details.productId.endsWith('123'), true);
  assert.strictEqual(test[1].details.productId.endsWith('123'), true);

module.exports = productDetails;
