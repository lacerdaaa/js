const Product = {
    nome: 'Teclado',
    quantity: 1000,
    price: 100,
}

// Acessar propriedade do produto

console.log(Product.nome) // Teclado
console.log(Product.quantity) // 1000

//Atualizar o valor de uma propriedade

Product.quantity = 300
Product.price = 120

console.log(Product.quantity) // 300
console.log(Product.price) // 120

// Exemplo 

// while (Product.quantity > 0) {
//     Product.quantity -= 1;
//     console.log(Product.quantity);
// }


//Na notação de colchetes

Product['quantity'] = 1000
console.log(Product['quantity']) // 1000