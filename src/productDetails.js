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
const assert = require('assert');

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

// assert.strictEqual(Array.isArray(productDetails('Alcool gel', 'Máscara')), true);
// assert.strictEqual(Object.entries(productDetails('Alcool gel', 'Máscara')).length, 2);
// assert.deepStrictEqual(typeof(productDetails('Alcool gel', 'Máscara')), 'object')
// assert.notDeepStrictEqual(productDetails('Alcool Gel', 'Mascara')[0],productDetails('Alcool gel', 'Máscara')[1]);
// const productId1 = productDetails('Alcool Gel', 'Mascara')[0].details.productId;
// const productId2 = productDetails('Alcool Gel', 'Mascara')[1].details.productId;
// assert.strictEqual(productId1.substr(productId1.length - 3),'123');
// assert.strictEqual(productId2.substr(productId2.length - 3),'123');