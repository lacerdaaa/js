//for in percorre um objeto/array e percorre suas props e posicoes

let person = {
    name: "lacerda", 
    age: 19,
    role: "full stack developer intern",
    email: "edulacerdaaa@gmail.com"
}

let steps = 1

for(let l in person) {
    console.log(`${steps++} posicao` )
    console.log(l)
    //para acessar as PROPRIEDADES
    console.log(person[l])


}

let array = ['junior', 'luana', 'lais', 'bia']

steps = 1
for( let name in array) {
    console.log(`${steps++} posicao` )
    console.log(name)
    console.log(array[name])
}


console.log('FIM !!!!!!!!!!!!!!!!')