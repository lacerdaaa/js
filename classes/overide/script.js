class Animal {
    constructor(name) {
        this.name = name
    }

    makeNoise() {
        console.log("Som de Animal")
    }
}

class Dog extends Animal{
   
    // Não vai ter nada aqui;
}

let dog = new Dog('cachorro');
console.log(dog.name)
dog.makeNoise()

class Cat extends Animal {
   
    // Não há nada aqui
}

const cat = new Cat('Xaninha')
console.log(cat.name)
cat.makeNoise();