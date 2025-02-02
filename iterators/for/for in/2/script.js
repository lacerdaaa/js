// exibir o array students dentro de uma ul

const list = document.querySelector("#list")
let students = [];

let student;
let option;
let formated;

do {
    student = prompt("type the name of a student")
    students.push(student)
    const listItem = document.createElement('li')
    for(student in students) {
        listItem.innerText=`${students[student]}`
        list.appendChild(listItem)
    }
    option = prompt('continue?')
    formated = option.toLowerCase()
} while (formated !== 'n');