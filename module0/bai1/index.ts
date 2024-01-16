class Triangle {
    private ma: number;
    private mb: number;
    private mc: number;

    public getMa(): number {
	return this.ma;
    }

    public getMb(): number {
	return this.mb;
    }

    public getMc(): number {
	return this.mc;
    }

    public setMa(value: number) {
        if (value > 0)
	    this.ma = value;
    }

    public setMb(value: number) {
        if (value > 0)
	    this.mb = value;
    }

    public setMc(value: number) {
        if (value > 0)
	    this.mc = value;
    }
    
    constructor(ma: number, mb: number, mc: number) {
        if (
            ma > 0 &&
            mb > 0 &&
            mc > 0 
        ) {
            if (
                ma + mb > mc ||
                ma + mc > mb ||
                mc + mb > ma 
            ) {
                this.ma = ma;
                this.mb = mb;
                this.mc = mc;
            } else {
                this.ma = 0;
                this.mb = 0;
                this.mc = 0;    
            }
        } else {
            this.ma = 0;
            this.mb = 0;
            this.mc = 0;
        }
	}

    public getPerimeter() {
        return this.ma + this.mb + this.mc;
    }

    public getArea() {
        let p = this.getPerimeter() / 2;
        return Math.sqrt(p * (p - this.ma) * (p - this.mb) * (p - this.mc));
    }

    public getType() {
        if (
            this.ma + this.mb <= this.mc ||
            this.ma + this.mc <= this.mb ||
            this.mb + this.mc <= this.ma ||
            this.ma == 0 || 
            this.mb == 0 || 
            this.mc == 0 
        )
            return "Not a triangle"
        
        if (this.ma == this.mb && this.ma == this.mc)
            return "Equilateral Triangle";

        if (
            this.ma == this.mb && this.mb != this.mc || 
            this.ma == this.mc && this.mc != this.mb || 
            this.mb == this.mc && this.mc != this.ma 
        )
            return "Isosceles Triangle";
        
        return "Triangle"
    }

    public toString() {
        return `Sides: ${this.ma}, ${this.mb}, ${this.mc}. Type: ${this.getType()}. Perimeter: ${this.getPerimeter()}. Area: ${this.getArea()}`;
    }
}

function main() {
    let t1 = new Triangle(3, 4, 0);
    let t2 = new Triangle(3, 4, 8);
    let t3 = new Triangle(6, 4, 5);
    let t4 = new Triangle(3, 4, 3);
    let t5 = new Triangle(4, 4, 4);
    
    console.log( t1.toString() );
    console.log( t2.toString() );
    console.log( t3.toString() );
    console.log( t4.toString() );
    console.log( t5.toString() );
}

main();
