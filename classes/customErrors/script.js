// custom error in js with classes

class MyCustomError {
    constructor(message) {
        this.message = "custom error class:" + message
    }
}

try {
    throw new MyCustomError("made by constructor error")
} catch (error) {
    if (error instanceof MyCustomError) {
        console.log(error.message)
    }
}