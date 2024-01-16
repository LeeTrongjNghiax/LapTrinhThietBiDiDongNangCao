class Vehicle {
    private owner: string;
    private type: string;
    private cost: number;
    private cylinder: number;

	public getOwner(): string {
		return this.owner;
	}
	public getType(): string {
		return this.type;
	}
	
	public getCost(): number {
		return this.cost;
	}
	
	public getCylinder(): number {
		return this.cylinder;
	}

	public setOwner(value: string) {
		this.owner = value;
	}

	public setType(value: string) {
		this.type = value;
	}

	public setCost(value: number) {
		this.cost = value;
	}
	
	public setCylinder(value: number) {
		this.cylinder = value;
	}

    constructor(owner: string, type: string, cost: number, cylinder: number) {
        this.owner = owner;
        this.type = type;
        this.cost = cost;
        this.cylinder = cylinder;
    }

    public getTax() {
        if (this.cylinder > 200)
            return this.cost * 5 / 100;
        else if (this.cylinder >= 100 && this.cylinder <= 200)
            return this.cost * 3 / 100;
        else
            return this.cost * 1 / 100;
    }

    public toString() {
        return `${this.owner}, ${this.type}, ${this.cylinder}, ${this.$cost}, ${this.getTax()}`;
    }
}

function main() {
    let xe1 = new Vehicle("Nguyen Thu Loan", "Future Neo", 35_000_000, 100);
    let xe2 = new Vehicle("Le Minh Tinh", "Ford Ranger", 250_000_000, 3000);
    let xe3 = new Vehicle("Nguyen Minh Triet", "Landscape", 1_000_000_000, 1500);

    console.log( "Tên chủ xe | Loại xe | Dung tích | Trị giá | Thuế phải nộp" );
    console.log( xe1.toString() );
    console.log( xe2.toString() );
    console.log( xe3.toString() );
}

main();
