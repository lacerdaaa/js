// O laço for é usado para repetir uma ação um número específico de vezes. Ele é composto por três partes principais: inicialização, condição e incremento
// let number = []

// for(let i =0; i <=10; i++) {
//     number.push(i)
// }


// for(let j = 10; j >= 0; j-- ) {
//     number.push(j)
// }
 
const mult = (a, b) => a * b

for(let i = 1; i <= 10; i++) {
    console.log(`5 * ${i} = ${mult(5, i)}`)
}