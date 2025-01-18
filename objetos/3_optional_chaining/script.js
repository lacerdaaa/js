/* 
OPTIONAL CHAINING 

Optional Chaining é um recurso do JavaScript que permite acessar propriedades de objetos aninhados de forma segura. 
Se uma propriedade no meio da cadeia for `null` ou `undefined`, a expressão retornará `undefined` em vez de lançar um erro.

Exemplo:

const user = {
    name: 'John',
    address: {
        street: '123 Main St',
        city: 'Anytown'
    }
};

// Sem Optional Chaining
const street = user.address && user.address.street; // '123 Main St'

// Com Optional Chaining
const street = user?.address?.street; // '123 Main St'

// Se address for undefined
const user2 = {
    name: 'Jane'
};

const street2 = user2?.address?.street; // undefined
*/


const user = {
    id: 1,
    nome: "Eduardo",
    age: 19, 
    /*
    adress: {
        street: "Rua 1",
        number: 123,
        city: "São Paulo",
        state: "SP",
        country: "Brasil",
        geo: {
            latitude: 23.4567,
            longitude: -45.6789
        },
    },
    */
    message: function() { // NÃO se usa o this em arrow functions, pois elas nao tem contexto próprio.
        console.log(`Ola, ${this.nome}!`);
    }
}

//Acessando propriedades de objetos

console.log(user?.adress?.state);
console.log(user?.adress?.street)

//Funciona tambem para metodos

user?.message?.() // Ola, Eduardo!