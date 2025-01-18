/*   
UM OBJETO É UMA COLEÇÃO DE PROPRIEDADES ( CARACTERÍSTICAS ) E MÉTODOS ( FUNÇÕES )
BASEADAS EM UM MODELO PRÉ-DEFINIDO ( CLASSE )

*/

//Criando um objeto vazio.

const obj = {}
console.log(typeof obj)

//Criando um objeto com propriedades.

const Person = {
    email: "edulacerdaaa@gmail.com",
    age: 19, 
    isAdult: true,
    name: {
        first: "Eduardo",
        last: "Lacerda"
    },
    address: {
        street: "Rua Augusto Emilio Zaluar",
        number: 181,
        postalCode: "13070-140"
    },
    greeting: () => {
        console.log("Olá, tudo bem? Firme?")
    }
}

//Para acessar as propriedades e metodos de um objeto, usamos a notação de ponto.

Person.greeting()
console.log(Person.name.first)
console.log(Person.address.street)

/*
Saída:
 Olá, tudo bem? Firme?
 Eduardo
 Rua Augusto Emilio Zaluar
*/

//É possível também utilizar a notação de colchetes.