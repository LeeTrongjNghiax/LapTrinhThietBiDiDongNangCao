class ToaDo {
    private ten: string;
    private x: number;
    private y: number;

	public getTen(): string {
		return this.ten;
	}

	public getX(): number {
		return this.x;
	}
	public getY(): number {
		return this.y;
	}

	public setTen(value: string) {
		this.ten = value;
    }
    
	public setX(value: number) {
		this.x = value;
	}
	public setY(value: number) {
		this.y = value;
	}

    constructor();
    constructor(x: number, y: number);
    constructor(x?: number, y?: number) {
        if (x) this.x = x;
        if (y) this.y = y;
    }

    public toString(): string {
        return ``
    }
}

class HinhTron {
    private tam: ToaDo;
    private banKinh: number;

    public getTam(): ToaDo {
		return this.tam;
	}

    public getBanKinh(): number {
		return this.banKinh;
	}

	public setTam(value: ToaDo) {
		this.tam = value;
    }

    public setBanKinh(value: number) {
		this.banKinh = this.banKinh;
    }
    
    constructor();
    constructor(tam: ToaDo, banKinh: number);
    constructor(tam?: ToaDo, banKinh?: number) {
        if (tam) this.tam = tam;
        if (banKinh) this.banKinh = banKinh;
    }

    public tinhChuVi(): number {
        return Math.PI * 2 * this.banKinh;
    }

    public tinhDienTich(): number {
        return Math.PI * this.banKinh * this.banKinh;
    }
}

function main() {
    let toaDo = new ToaDo(5, 5);
    toaDo.setTen("O")
    let o = new HinhTron(toaDo, 10.5);

    console.log( `Hinh tron co tam ${o.getTam().getTen()}(${o.getTam().getX()}, ${o.getTam().getY()}) voi ban kinh ${o.getBanKinh()} co dien tich va chu vi lan luot la ${o.tinhDienTich()} va ${o.tinhChuVi()}` );
}

main();