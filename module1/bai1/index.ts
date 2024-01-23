class ChuyenXe {
    private maSo: number;
    private hoTen: string;
    private soXe: number;
    private doanhThu: number;

	public getDoanhThu(): number {
		return this.doanhThu;
    }
    
    constructor(maSo: number, hoTen: string, soXe: number, doanhThu: number) {
        this.maSo = maSo;
        this.hoTen = hoTen;
        this.soXe = soXe;
        this.doanhThu = doanhThu;
    }
}

class ChuyenXeNoiThanh extends ChuyenXe {
    private soTuyen: number;
    private soKm: number;

    constructor(maSo: number, hoTen: string, soXe: number, doanhThu: number, soTuyen: number, soKm: number) {
        super(maSo, hoTen, soXe, doanhThu);
        this.soTuyen = this.soTuyen;
        this.soKm = this.soKm;
    }
}

class ChuyenXeNgoaiThanh extends ChuyenXe {
    private noiDen: string;
    private soNgay: number;

    constructor(maSo: number, hoTen: string, soXe: number, doanhThu: number, noiDen: string, soNgay: number) {
        super(maSo, hoTen, soXe, doanhThu);
        this.noiDen = this.noiDen;
        this.soNgay = this.soNgay;
    }
}

function main() {
    let arr: any[]  = [];

    arr.push(
        new ChuyenXeNoiThanh(1, "Lmao", 123456, 1200000, 24, 9),
        new ChuyenXeNoiThanh(1, "Lmao", 123456, 1200000, 25, 8),
        new ChuyenXeNgoaiThanh(2, "Tien", 123456, 12200000, "Ho Chi Minh", 2),
        new ChuyenXeNgoaiThanh(2, "Tien", 123456, 11200000, "Ho Chi Minh", 3)
    );

    let tong = 0;
    let tongNoi = 0;
    let tongNgoai = 0;

    for (let i = 0; i < arr.length; i++) {        
        tong += arr[i].getDoanhThu();

        if (arr[i] instanceof ChuyenXeNoiThanh) {
            tongNoi += arr[i].getDoanhThu();
        } else {
            tongNgoai += arr[i].getDoanhThu();
        }
    }

    console.log("Tong doanh thu tat ca chuyen xe: " + tong);
    console.log("Tong doanh thu chuyen xe noi thanh: " + tongNoi);
    console.log("Tong doanh thu chuyen xe ngoai thanh: " + tongNgoai);
}

main();