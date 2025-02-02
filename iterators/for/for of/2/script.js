let array = ["Eduardo", "Luana", "Beatriz", "Lais", "Algoritmos"];
let palavraEspecifica = "Eduardo";
let encontrada = false;

for (let word of array) {
    if (word === palavraEspecifica) {
        console.log(`Este array contém a palavra ${word}`);
        encontrada = true;
        break
    }
}

if (!encontrada) {
    console.log(`A palavra ${palavraEspecifica} não foi encontrada no array.`);
}