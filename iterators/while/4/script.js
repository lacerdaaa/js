// 1.Escreva um código que imprima a tabuada de 1 a 10, de forma organizada e clara. A saída precisa ser semelhante ao exemplo a abaixo:


const div = document.querySelector("#div")
let mult = (a, b) => a * b;

for (let i = 1; i <= 10; i++) {
    const tablediv = document.createElement('div')
    const tableTitle = document.createElement('h1')
    tableTitle.innerText = `Tabuada do ${i}`
    tablediv.appendChild(tableTitle)
    div.appendChild(tablediv)
    for (let j = 1; j <= 10; j++) {
        const tableRow = document.createElement('p')
        tableRow.innerText = `${i} * ${j} = ${mult(i, j)}`
        tablediv.appendChild(tableRow)
    }
}
