// 2. Implemente uma classe chamada “ContaBancária” que possua atributos para armazenar o número da conta, nome do titular e saldo. Adicione métodos para realizar depósitos e saques.

class BankAccount {
    constructor(agence, ownerName, balance) {
        this.agence = agence;
        this.ownerName = ownerName;
        this.balance = Number(balance);
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`A $${amount.toFixed(2)} deposit was successfully made in your account. New balance: $${this.balance.toFixed(2)}`);
        } else {
            console.log(`The deposit can't be less than $0.50 dollars`);
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`A $${amount.toFixed(2)} withdrawal was successfully made from your account. New balance: $${this.balance.toFixed(2)}`);
        } else {
            console.log("Insufficient balance or invalid withdrawal amount.");
        }
    }
}


class Bank {
    constructor() {}

    transference(fromAccount, toAccount, balance) {

    }
}

class Person {
    constructor(name, bank) {
        this.name = name;
        this.bank = bank;
    }
}








const bankAccount = new BankAccount(150, "Lacerda", 100);
const person = new Person("Eduardo", bankAccount);

person.bank.deposit(100); 
person.bank.withdraw(50); 