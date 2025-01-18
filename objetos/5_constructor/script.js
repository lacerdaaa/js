/*
    Uma função construtora em JavaScript é usada para criar objetos. Ela é semelhante a uma classe em outras linguagens de programação. 
    Para definir uma função construtora, você cria uma função normal, mas dentro dela, você usa a palavra-chave `this` para definir 
    propriedades e métodos que o objeto criado a partir dessa função terá. 

    Por exemplo:

    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.falar = function() {
            console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
        }
    }

    let pessoa1 = new Pessoa('João', 30);
    pessoa1.falar(); // Meu nome é João e eu tenho 30 anos.
    */   

    function CreateNewProduct(name) {
        const product = {}

        product.name = name
        product.details = function() {
            console.log(`O nome deste produto é : ${this.name}`)
        }

        return product
    }

    const teclado = new CreateNewProduct('Teclado')
    teclado.details() 

    const mouse = new CreateNewProduct('Mouse')
    mouse.details()

    const monitor = new CreateNewProduct('Monitor')
    monitor.details()

    // A função construtora espera receber um parametro que repassa ao objeto a ser criado. Deve sempre retornar o produto.

    // O new cria um novo objeto utilizando a estrutura do construtor, mas com os dados do argumento que ele recebe.

    //Exemplos de funções construtoras:

    let myName = new String('Eduardo')
    console.log(myName) // String { 'Eduardo' }

    let price = "40,6".replace(',', '')
    console.log(price) // 406

    let date = new Date()
    console.log(date) // Sat Jan 18 2025 16:42:35 GMT-0300 (Horário Padrão de Brasília)


    // Existe outra forma de declarar funções construtoras, mas é preferível que ao usar esta forma se use uma class

    function Person(name) { //Esta função de construtor pode ser convertida em uma declaração de classe.ts(80002)
        this.name = name
        this.message = function() {
            console.log(`Hello, my name is ${this.name}`)
        }
    }

    let man = new Person('Eduardo')
    console.log(man.name)
    man.message() // Hello, my name is = Eduardo
    