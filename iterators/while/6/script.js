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


do {
    let option = prompt(
        "Realize o seu voto: \n1. Candidato Jair Rodrigues \n2. Candidato Carlos Luz \n3. Candidato Neves Rocha \n4. Nulo \n5. Branco"
    )
    let c1 = 0
    let c2 = 0
    let c3 = 0
    let nullvote = 0
    let whitevote = 0

    switch (option) {
        case "1":
            c1++
            break
        case "2":
            c2++
            break

    }

} while (option != "6");