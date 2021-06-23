const assert = require('assert');

function insertOrder(str) {
   this.consuption.push(str);
}

function createMenu(obj) {
    return {
        fetchMenu() {
           return obj;
        },
        consuption: [],
        order: insertOrder,

        pay() {
            let total = 0;
            for (let i = 0; i <= this.consuption.length; i += 1) {
               console.log(this.consuption[i]); 
            }
        },
    };
}

const meuRestaurante = createMenu({
     food: {
         coxinha: 3.9,
         sopa: 9.9,
        },
        drink: {
            agua: 3.9,
            cerveja: 6.9,
        },
});

const objRetornado = createMenu();
console.log(objRetornado);
objRetornado.order('teste');
console.log(objRetornado);
console.log(objRetornado.consuption);

// assert.strictEqual(createMenu().order('teste'), ['teste']);