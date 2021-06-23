const assert = require('assert');

const paramOne = 'Alcool gel';
const paramTwo = 'Máscara';
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

// Teste que os dois productIds terminam com 123.

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
module.exports = productDetails;

assert.strictEqual(Array.isArray(productDetails(paramOne, paramTwo)), true);
assert.strictEqual(productDetails(paramOne, paramTwo).length, 2);
assert.deepStrictEqual(typeof Object.values(productDetails(paramOne, paramTwo)), 'object');
assert.notDeepStrictEqual(Object.entries(productDetails(paramOne, paramTwo)), true);
assert.strictEqual(productDetails(paramOne, paramTwo)[1].details.productId, `${paramTwo}123`);
assert.strictEqual(productDetails(paramOne, paramTwo)[0].details.productId, `${paramOne}123`);
