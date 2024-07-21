#! /usr/bin/env node
class BankAccount {
    accountNumber;
    balance;
    constructor(accountNumber, initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount}. New balance: ${this.balance}`);
        }
        else {
            console.log("Deposit amount must be positive.");
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
        }
        else {
            console.log("Insufficient balance or invalid amount.");
        }
    }
    getBalance() {
        return this.balance;
    }
    getAccountNumber() {
        return this.accountNumber;
    }
}
class Customer {
    name;
    customerId;
    accounts;
    constructor(name, customerId) {
        this.name = name;
        this.customerId = customerId;
        this.accounts = [];
    }
    addAccount(account) {
        this.accounts.push(account);
        console.log(`Account ${account.getAccountNumber()} added to customer ${this.name}`);
    }
    getAccounts() {
        return this.accounts;
    }
    getCustomerId() {
        return this.customerId;
    }
    getName() {
        return this.name;
    }
}
class Transaction {
    date;
    amount;
    type;
    constructor(date, amount, type) {
        this.date = date;
        this.amount = amount;
        this.type = type;
    }
    getTransactionDetails() {
        return `${this.type} of ${this.amount} on ${this.date}`;
    }
}
// Create a customer
const customer1 = new Customer("Alice", "C001");
// Create bank accounts
const account1 = new BankAccount("A001", 1000);
const account2 = new BankAccount("A002", 500);
// Add accounts to the customer
customer1.addAccount(account1);
customer1.addAccount(account2);
// Perform some transactions
account1.deposit(200);
account1.withdraw(100);
account2.deposit(300);
// Display account balances
customer1.getAccounts().forEach(account => {
    console.log(`Account ${account.getAccountNumber()} balance: ${account.getBalance()}`);
});
export {};
