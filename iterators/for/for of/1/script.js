// Estrutura do Laço for...of
// O laço for...of é usado para iterar sobre objetos iteráveis (como arrays, strings, mapas, conjuntos, etc.). Ele permite que você percorra os VALORES DIRETAMENTE dos elementos de um objeto iterável de forma simples e direta

let students = ["Eduardo", "Luana", "Beatriz", "Lais", "Keli"];

// Usando for...of para iterar sobre os valores
for (let student of students) {
    console.log(student);
}

// Usando for...in para iterar sobre os índices e acessar os valores
for (let index in students) {
    console.log(`${index} : ${students[index]}`);
}