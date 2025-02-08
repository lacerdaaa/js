class Animal {
    constructor(name) {
        this.name = name
    }

    makeNoise() {
        console.log("Som de Animal")
    }
}

class Dog extends Animal{
    makeNoise() {
        console.log("woof Woof Woof..")
    }
}

let dog = new Dog('cachorro');
console.log(dog.name)
dog.makeNoise()

class Cat extends Animal {
   
    makeNoise() {
        console.log("Miau Miaui Miau")
    }
}

const cat = new Cat('Xaninha')
console.log(cat.name)
cat.makeNoise();