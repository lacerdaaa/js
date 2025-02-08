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

    static transference(fromAccount, toAccount, amount) {
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

const account1 = new BankAccount(123, 'lacerda', 1000);
const account2 = new BankAccount(456, 'sophia', 500);
const bank = new Bank();

try {
    
account1.deposit(501);
account1.withdraw(143);

bank.transference(account1, account2, 300);
bank.transference(account2, account1, 500)
bank.transference

} catch (error) {
    console.log(error)
}

