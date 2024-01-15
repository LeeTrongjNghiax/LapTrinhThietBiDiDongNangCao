var Account = /** @class */ (function () {
    function Account(accNumber, name, balance) {
        this.RATE = 0.035;
        if (accNumber)
            this.accountNumber = accNumber;
        if (name)
            this.name = name;
        if (balance)
            this.balance = balance;
    }
    Account.prototype.getAccountNumber = function () {
        return this.accountNumber;
    };
    Account.prototype.getBalance = function () {
        return this.balance;
    };
    Account.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            return true;
        }
        else {
            return false;
        }
    };
    Account.prototype.withdraw = function (amount, fee) {
        if (amount > 0 && amount + fee <= this.balance) {
            this.balance -= amount + fee;
            return true;
        }
        else {
            return false;
        }
    };
    Account.prototype.addInterest = function () {
        return this.balance * (1 + this.RATE);
    };
    Account.prototype.transfer = function (acc2, amount) {
        if (amount > 0 && amount <= this.balance) {
            acc2.deposit(amount);
            this.balance -= amount;
            return true;
        }
        else {
            return false;
        }
    };
    Account.prototype.toString = function () {
        return "Account number: ".concat(this.accountNumber, ", name: ").concat(this.name, ", balance: ").concat(this.balance);
    };
    return Account;
}());
function main() {
    var acc1 = new Account(72354, "Ted Murphy", 102.56);
    var acc2 = new Account(69713, "Jane Smith", 40.00);
    var acc3 = new Account(93757, "Edward Demsey", 759.32);
    acc1.deposit(25.85);
    acc1.deposit(500.00);
    acc2.withdraw(430.75, 1.50);
    console.log(acc3.addInterest());
    console.log(acc1.toString());
    console.log(acc2.toString());
    console.log(acc3.toString());
    acc2.transfer(acc1, 100.00);
    console.log(acc1.toString());
    console.log(acc2.toString());
}
main();
