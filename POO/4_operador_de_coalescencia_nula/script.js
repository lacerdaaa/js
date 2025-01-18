/*   
O operador de coalescencia nula (??) é um operador lógico que retorna o valor do seu operando da direita quando o operando da esquerda é null ou undefined. Caso contrário, ele retorna o valor do operando da esquerda.

Exemplo:


let a = null;
let b = 'valor padrão';
let resultado = a ?? b; // resultado será 'valor padrão'

console.log(resultado); // 'valor padrão'

*/

let content = null

console.log(content ?? "Default content") /* Saida: Default content, pois o content é null e o operador coalescencia nula retorna o valor da direita. */

//Isto funciona apenas para NULL e UNDEFINED

let content2 = false

console.log(content2 ?? "Default content") /*Saida: false    */

// Functiona tambem com objetos

const user = {
    name: "Eduardo",
    picture: undefined,

}

console.log(user.picture ?? "default.png")