function createAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit(amount) {
            balance += amount;
            console.log(balance);
        },

        withdraw(amount) {
            balance -= amount;
            console.log(balance);
        },

        checkBalance() {
            console.log(balance);
        }
    };
}

const account = createAccount(20000);

account.deposit(5000);      // 25000
account.withdraw(10000);    // 15000
account.checkBalance();     // 15000



function multiplyBy(factor) {
    return function (number) {
        return number * factor;
    };
}

const t=multiplyBy(3);

console.log(t(10));