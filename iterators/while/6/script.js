// Faça um programa que simule a urna eletrônica.
// A tela a ser apresentada deverá ser da seguinte forma:
// As opcoes sao:
// 1. Candidato Jair Rodrigues
// 2. Candidato Carlos Luz
// 3. Candidato Neves Rocha
// 4. Nulo
// 5. Branco
// Entre com o seu voto:
// O programa deverá ler os votos dos eleitores e, quando for entrado o número 6, apresentar as seguintes
// informações:
// a) O número de votos de cada candidato;
// b) A porcentagem de votos nulos;
// c) A porcentagem de votos brancos;
// d) O candidato vencedor.

let option
let c1 = 0
let c2 = 0
let c3 = 0
let nullvote = 0
let whitevote = 0

do {
    option = prompt(
        "Realize o seu voto: \n1. Candidato Jair Rodrigues \n2. Candidato Carlos Luz \n3. Candidato Neves Rocha \n4. Nulo \n5. Branco"
    )

    switch (option) {
        case "1":
            c1++
            break
        case "2":
            c2++
            break
        case "3":
            c3++
            break
        case "4": 
            nullvote++
            break
        case "5":
            whitevote++
            break
        case "6":
            alert("encerrando sessão eleitoral..")
            break
        default:
            alert("invalid input")

    }

} while (option != "6");

console.log(
    `Apuração dos votos: \n1. ${c1} \n2. ${c2} \n3. ${c3} \n4. ${nullvote} \n5. ${whitevote}`
)