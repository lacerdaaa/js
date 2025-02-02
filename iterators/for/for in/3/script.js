// 3. Crie um objeto carro com propriedades como marca, modelo e ano. Use for...in para listar todas as propriedades e valores.

function Car(name, brand, model, year, km, color) {
    this.name = name;
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.km = km;
    this.color = color;
}

const jetta = new Car("Jetta", "Volkswagem", "Jetta Gli 2.0", "2022", 1000, "red")

let step = 0;

for(property in jetta) {
    console.log(`${step++} position`)
    console.log(jetta[property])
}

