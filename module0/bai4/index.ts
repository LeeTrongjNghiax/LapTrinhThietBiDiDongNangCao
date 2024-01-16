class Order {
    private orderID: number;
    private orderDate: Date;
    private lineItems: OrderDetail[] = [];
    private count: number;

	public getOrderID(): number {
		return this.orderID;
	}

	public getOrderDate(): Date {
		return this.orderDate;
	}

	public getLineItems(): OrderDetail[] {
		return this.lineItems;
	}

	public setOrderDate(value: Date) {
		this.orderDate = value;
	}

    constructor(orderID: number, orderDate: Date) {
        this.orderID = orderID;
        this.orderDate = orderDate;
    }

    public addLineItem(product: Product, quantity: number) {
        this.getLineItems().push( new OrderDetail(product, quantity) );
    }

    public calcTotalCharge(): number {
        let result: number = 0;
        
        for (let i = 0; i < this.count; i++) {
            console.log( `1 + ${ this.getLineItems()[i].calcTotalPrice() }` );
            
            result += this.getLineItems()[i].calcTotalPrice();
        }

        return result;
    }

    public toString(): string {
        return ``;
    }
}

class OrderDetail {
    private quantity: number;
    private product: Product;

    public getQuantity(): number {
		return this.quantity;
	}

	public setQuantity(value: number) {
		this.quantity = value;
	}

    constructor(product: Product, quantity: number) {
        this.product = product;
        this.quantity = quantity;
    }

    public calcTotalPrice(): number {
        return this.quantity * this.product.getPrice();
    }

    public toString(): string {
        return ``;
    }
}

class Product {
    private description: string;
    private productID: string;
    private price: number;

    public getDescription(): string {
		return this.description;
	}
    public getProductID(): string {
		return this.productID;
	}
    public getPrice(): number {
		return this.price;
	}

	public setDescription(value: string) {
		this.description = value;
	}
	public setProductID(value: string) {
		this.productID = value;
	}
	public setPrice(value: number) {
		this.price = value;
	}

    constructor();
    constructor(description: string, productID: string, price: number)
    constructor(description?: string, productID?: string, price?: number) {
        if (description)
            this.description = description;

        if (productID)
            this.productID = productID;

        if (price)
            this.price = price;
    }

    public toString(): string {
        return ``;
    }
}

function main() {
    let product1 = new Product("Nuoc tuong", "sp4", 8_000);
    let product2 = new Product("Gao", "sp3", 18_000);
    let product3 = new Product("Duong", "sp2", 10_000);

    let order = new Order(1, new Date());
    order.addLineItem(product1, 10);
    order.addLineItem(product2, 5);
    order.addLineItem(product3, 1);
    order.addLineItem(product2, 1);

    console.log( order );
    console.log( order.calcTotalCharge() );
}

main();
