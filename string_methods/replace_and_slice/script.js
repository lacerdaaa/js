/*
    // A função replace() em JavaScript é usada para substituir parte de uma string por outra string ou por um valor gerado por uma função.
    // A sintaxe básica é: string.replace(substring, newSubstring)
    // Exemplo:
    let texto = "Hello World";
    let novoTexto = texto.replace("World", "JavaScript");
    console.log(novoTexto); // Saída: Hello JavaScript

    // A função slice() em JavaScript é usada para extrair uma parte de uma string sem modificar a string original.

    // A sintaxe básica é: string.slice(inicio, fim)
    // Exemplo:
    let texto2 = "Hello World";
    let parteTexto = texto2.slice(0, 5);
    console.log(parteTexto); // Saída: Hello
*/

let message = "Estou estudando os fundamentos do Javascript"

//Substituir parte de um texto

console.log(message.replace("Javascript", "Java"))

let messageChanged = message.replace("Estou estudando", "Estou aprendendo")

console.log(messageChanged)

//como EXTRAiR uma parte de um texto

console.log(message.slice(0, 5)) //Estou ( 0 - E, 1 - S, 2 - T, 3 - O, 4- U, 5 - FIM )

console.log(message.slice(15)) // os fundamentos do Javascript ( recortou uma parte do inicio ate o fim da string, ja que o inicio é 15 e nao foi declarado fim)

// extraindo de tras para frente

console.log(message.slice(-11))


//formatar string para retirar espaços utilizando TRIM

let messageWithSpace = "   Javacript    "
console.log(messageWithSpace)
console.log(messageWithSpace.length)
let messageFormatted = messageWithSpace.trim()
console.log(messageFormatted)
console.log(messageFormatted.length) //retirou os espaços da string e mostrou o tamanho
