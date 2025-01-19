/* 
 lenght é usado para identificar o número de caracteres ( sendo que espaços e caracteres como , . ! @ contam como 1 caractere)
*/

let message = "Estou estudando os fundamentos de Javascript"

console.log(message)

//utilizar comprimento

console.log(message.length)

// exemplo de utilidade

let password = "12346"

if(password.length >= 6) {
    console.log("Senha cadastrada")
} else {
    console.log("Uma senha deve ter de 6 a 12 caracteres!!")
}

// como descobrir o comprimento de um numero em javascript?

let value = 123456
console.log(typeof value) // number
console.log(String(value).length) // 6
console.log(typeof String(value))// string 
