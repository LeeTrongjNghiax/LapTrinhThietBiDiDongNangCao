class Account {
    private accountNumber: number;
    private name: string;
    private balance: number;
    private RATE: number = 0.035;

	public getAccountNumber(): number {
		return this.accountNumber;
	}

	public getBalance(): number {
		return this.balance;
	}
 
    constructor();
    constructor(accNumber: number, name: string);
    constructor(accNumber: number, name: string, balance: number);
    constructor(accNumber?: number, name?: string, balance?: number) {
        if (accNumber)
            this.accountNumber = accNumber;

        if (name)
            this.name = name;

        if (balance)
            this.balance = balance;
    }

    public deposit(amount: number): boolean {
        if (amount > 0) {
            this.balance += amount;
            return true;
        } else {
            return false;
        }
    }

    public withdraw(amount: number, fee: number): boolean {
        if (amount > 0 && amount + fee <= this.balance) {
            this.balance -= amount + fee;
            return true;
        } else {
            return false;
        }
    }

    public addInterest() {
        return this.balance * (1 + this.RATE);
    }

    public transfer(acc2: Account, amount: number): boolean {
        if (amount > 0 && amount <= this.balance) {
            acc2.deposit(amount)
            this.balance -= amount;
            return true;
        } else {
            return false;
        }
    }

    public toString(): string {
        return `Account number: ${this.accountNumber}, name: ${this.name}, balance: ${this.balance}`;
    }
}

function main() {
    let acc1 = new Account(72354, "Ted Murphy", 102.56);
    let acc2 = new Account(69713, "Jane Smith", 40.00);
    let acc3 = new Account(93757, "Edward Demsey", 759.32);

    acc1.deposit(25.85);
    acc1.deposit(500.00);

    acc2.withdraw(430.75, 1.50);

    console.log( acc3.addInterest() );

    console.log( acc1.toString() );
    console.log( acc2.toString() );
    console.log( acc3.toString() );
    
    acc2.transfer(acc1, 100.00);

    console.log( acc1.toString() );
    console.log( acc2.toString() );
}

main();