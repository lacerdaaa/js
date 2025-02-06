// 1. Crie uma classe chamada “Círculo” que possua um atributo para armazenar o raio e métodos para calcular a área e o perímetro do círculo.

class Circle {
    
    constructor(radius) {
        this.radius = Number(radius)
    }

    getArea() {
        let circleArea = Math.pow(this.radius, 2) * 3.14
        return console.log(`the area of this object is ${circleArea}`)
        }

    getPerimeter() {
        let circlePerimeter = 2 * 3.14 * this.radius
        return console.log(`the perimeter of this object is ${circlePerimeter.toFixed(2)}`)
    }
}

let paint = new Circle(5)
paint.getArea()
paint.getPerimeter()


