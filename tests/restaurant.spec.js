const assert = require('assert');
const createMenu = require('../src/restaurant');
 
/*
  Você é responsável por escrever o código do sistema de pedidos de um restaurante. Deve ser possível, através desse sistema, cadastrar um menu. Dado que um menu foi cadastrado, o sistema deve disponibilizar um objeto através do qual se consegue:
  - ler o menu cadastrado;
  - fazer pedidos;
  - verificar o que foi pedido;
  - somar o valor da conta.

  A estrutura deste código e deste objeto já foi definida e você irá implementá-la.
  Abaixo você verá uma série de testes e passos que devem ser, NECESSARIAMENTE, feitos em ordem para o bom desenvolvimento do sistema. Eles guiarão você pelo desenvolvimento.

  Parâmetros:
  - Um objeto. Exemplos: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }.
  Comportamento:

  const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }).

  meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

  meuRestaurante.order('coxinha') // Retorno: undefined

  meuRestaurante.consumption // Retorno: ['coxinha']

  meuRestaurante.pay() // Retorno: 3.9

  Uma função createMenu retorna um objeto com as seguintes características:
  - Uma chave `fetchMenu` retorna o objeto que a função `createMenu` recebe por parâmetro. O menu tem sempre duas chaves, `food` e `drink`, no seguinte formato:

  const meuRestaurante = createMenu({
    food: {'coxinha': 3.90, 'sanduiche', 9.90},
    drinks: {'agua': 3.90, 'cerveja': 6.90}
  });

  meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` que contém um array de strings, com cada string sendo a chave de um pedido. Por exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` que tem uma função que, recebida uma string como parâmetro, adiciona essa string à lista salva em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função que soma o valor de todos os pedidos e dá o preço com acréscimo de 10%.

  IMPORTANTE: FAÇA OS TESTES E PASSOS DE ACORDO COM A ORDEM INDICADA!

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('9 - Implemente os casos de teste e a função `createMenu`', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    // TESTE 1: Verifique se o retorno da função createMenu() é um objeto que possui, 
    // mas não é necessariamente é limitado à chave `fetchMenu`, a qual tem como valor uma função.
    // ```
    // const objetoRetornado = createMenu(); // Retorno: { fetchMenu: () => {}, ... }

    const test1 = typeof createMenu({ food: { sanduicheNatural: 5.9, cafe: 2.9 } }).fetchMenu;
    const expected1 = 'function';
    assert.deepStrictEqual(test1, expected1);

    // TESTE 2: Verifique que, dado que a função createMenu foi chamada com o objeto: `{ food: {}, drink: {} }`, 
    // verifique que 'objetoRetornado.fetchMenu()' retorna um objeto cujas chaves são somente `food` e `drink`.
    // ```
    // const objetoRetornado = createMenu({ food: {}, drink: {} });
    // objetoRetornado.fetchMenu() // Retorno: { food: {}, drink: {}}
    
    const test2 = Object.keys(createMenu({ food: { batatinha: 7.9 }, drink: { refrigerante: 4.9 } }).fetchMenu());
    const expected2 = ['food', 'drink'];
    assert.deepStrictEqual(test2, expected2);

    // TESTE 3: Verifique que o menu passado pra função createMenu é identico ao menu recuperado pela função 'objetoRetornado.fetchMenu'
    // ```
    // const objetoRetornado = createMenu(objetoQualquer);
    // objetoRetornado.fetchMenu() // Retorno: objetoQualquer

    const test3 = createMenu({ food: { batatinha: 7.9 }, drink: { refrigerante: 4.9 } }).fetchMenu();
    const expected3 = { food: { batatinha: 7.9 }, drink: { refrigerante: 4.9 } };
    assert.deepStrictEqual(test3, expected3);

    // Agora faça o PASSO 1 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------
    // TESTE 4: Verifique que 'objetoRetornado.consumption', após a criação do menu, retorna um array vazio.
    // ```
    // const objetoRetornado = createMenu(objetoQualquer);
    // objetoRetornado.consumption // Retorno: []
  
    const teste4 = createMenu({ food: { batatinha: 7.9 }, drink: { refrigerante: 4.9 } }).consumption;
    const expected4 = [];
    assert.deepStrictEqual(teste4, expected4);

    // Agora faça o PASSO 2 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------
    // TESTE 5: Verifique que chamar uma função associada à chave `order` no objeto retornado, passando uma string como parâmetro, 
    // como `objetoRetornado.order('coxinha')`, tal string é adicionada ao array retornado em `objetoRetornado.consumption
    // ```
    // const objetoRetornado = createMenu(objetoQualquer);
    // objetoRetornado.order("coxinha");
    // objetoRetornado.consumption // Retorno: ["coxinha"]

    const objeto = createMenu({ food: { batatinha: 7.9 }, drink: { refrigerante: 4.9 } });
    objeto.order('batatinha');
    const teste5 = objeto.consumption;
    const expected5 = ['batatinha'];
    assert.deepStrictEqual(teste5, expected5);

    // Agora faça o PASSO 3 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------
    // TESTE 6: Verifique que as três orders seguintes, de bebidas e comidas mescladas, somam três itens no array `objetoRetornado.consumption` conforme os itens pedidos.
    // ```
    // objetoRetornado.order("coxinha");
    // objetoRetornado.order("agua");
    // objetoRetornado.order("sopa");
    // objetoRetornado.order("sashimi");
    // objetoRetornado.consumption // Retorno: ["coxinha", "agua", "sopa", "sashimi"]

    const objeto2 = createMenu({ food: { coxinha: 4.9, sopa: 10.9, sashimi: 14.9 }, drink: { agua: 1.9 } });
    objeto2.order('coxinha');
    objeto2.order('agua');
    objeto2.order('sopa');
    objeto2.order('sashimi');
    const teste6 = objeto2.consumption;
    const expected6 = ['coxinha', 'agua', 'sopa', 'sashimi'];
    assert.deepStrictEqual(teste6, expected6);

    // Agora faça o TESTE 7 deste arquivo.
    // --------------------------------------------------------------------------------------
    // TESTE 7: Verifique que a função `order` aceita que pedidos repetidos sejam acrescidos a consumption.
    // ```
    // objetoRetornado.order('coxinha');
    // objetoRetornado.order('agua');
    // objetoRetornado.order('coxinha');
    // objetoRetornado.comsuption // Retorno: ['coxinha', 'agua', 'coxinha']

    const objeto3 = createMenu({ food: { coxinha: 4.9, sopa: 10.9, sashimi: 14.9 }, drink: { agua: 1.9 } });
    objeto3.order('coxinha');
    objeto3.order('agua');
    objeto3.order('coxinha');
    const teste7 = objeto3.consumption;
    const expected7 = ['coxinha', 'agua', 'coxinha'];
    assert.deepStrictEqual(teste7, expected7);

    // Agora faça o TESTE 8 deste arquivo.
    // --------------------------------------------------------------------------------------
    // TESTE 8: Verifique que, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption`
    // ```
    // objetoRetornado.order('coxinha');
    // objetoRetornado.order('agua');
    // objetoRetornado.order('coxinha');
    // objetoRetornado.pay() // Retorno: somaDosPreçosDosPedidos
    
    const objeto4 = createMenu({ food: { coxinha: 4.9, sopa: 10.9, sashimi: 14.9 }, drink: { agua: 1.9 } });
    objeto4.order('coxinha');
    objeto4.order('agua');
    objeto4.order('coxinha');
    const teste8 = objeto4.pay();
    const expected8 = 12.87;
    assert.deepStrictEqual(teste8, expected8);

    // Agora faça o PASSO 4 no arquivo `src/restaurant.js`.
  });
});
