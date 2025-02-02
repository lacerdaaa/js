// Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. O usuário deve informar de qual numero ele deseja ver a tabuada. A saída deve ser conforme o exemplo abaixo:

const ul = document.querySelector("#div")
let number = Number(prompt("choose a number between 1 and 10"));
const mult = (a, b) => a * b


for(let i = 0; i <= 10; i++) {
    const li = document.createElement('li')
    li.innerText=`${number} * ${i} = ${mult(i, number)}`
    ul.appendChild(li)
}

