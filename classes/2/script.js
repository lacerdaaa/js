// 2. Implemente uma classe chamada “ContaBancária” que possua atributos para armazenar o número da conta, nome do titular e saldo. Adicione métodos para realizar depósitos e saques.

class BankAccount {
    constructor(accountNumber, ownerName, balance = 0) {
        this.accountNumber = accountNumber;
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
    constructor() { }

    transference(fromAccount, toAccount, amount) {
        if (fromAccount.balance >= amount && amount > 0) {
            toAccount.balance += amount;
            fromAccount.balance -= amount;
            console.log(`A $${amount.toFixed(2)} transfer was successfully made from account ${fromAccount.accountNumber} to account ${toAccount.accountNumber}.`);
            console.log(`New balance of ${fromAccount.ownerName}: $${fromAccount.balance.toFixed(2)}`);
            console.log(`New balance of ${toAccount.ownerName}: $${toAccount.balance.toFixed(2)}`);
        } else {
            console.log("Insufficient balance or invalid transfer amount.");
        }
    }
}

const account1 = new BankAccount(123, 'John Doe', 1000);
const account2 = new BankAccount(456, 'Jane Smith', 500);

account1.deposit(200);
account1.withdraw(150);

const bank = new Bank();
bank.transference(account1, account2, 300);