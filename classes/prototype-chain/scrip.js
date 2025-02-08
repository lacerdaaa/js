// Cadeia de Protótipos (Prototype Chain) em JavaScript
// Em JavaScript, a herança é baseada em protótipos. Cada objeto tem uma propriedade interna chamada [[Prototype]], que pode ser outro objeto ou null. Essa propriedade é acessível através do atributo __proto__ ou da função Object.getPrototypeOf.

// Como Funciona a Cadeia de Protótipos
// Quando você tenta acessar uma propriedade de um objeto, o JavaScript primeiro procura essa propriedade no próprio objeto. Se não encontrar, ele procura na cadeia de protótipos (prototype chain). Esse processo continua até que a propriedade seja encontrada ou o final da cadeia seja alcançado (null).

const addres = {
    rua: "rua augusto emilio zaluar",
    number: 181,
    cep: '13070-140'
}

console.log(addres) // info do objeto e podemos ver tambem o prototype de objeto

const users = ["luana", "joao", "reinaldo", "preciosa,", "augusto"]

console.log(users) // exibe o array e o prototype de array

const username = "Eduardo Lacerda"

console.log(typeof username.__proto__)
