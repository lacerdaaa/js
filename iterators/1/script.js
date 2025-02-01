let employees_list = []

while(employees_list.length < 5 ) {
    let employee = prompt("what is the employee`s name?")
    employees_list.push(employee)
    console.table(employees_list)
}

console.table(employees_list)
