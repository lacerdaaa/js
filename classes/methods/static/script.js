class User {
    static showMessage() {
        console.log("this is a message")
    }
}

// const user = new User();
User.showMessage()

// static methods permitem chamar um metodo sem instanciar a classe na qual ele pertence

let array = ["maca", "pera"]
array.fill("joao")

console.log(array)