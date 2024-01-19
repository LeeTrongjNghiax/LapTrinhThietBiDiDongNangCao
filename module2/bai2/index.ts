class Sach {
    private maSach: number;
    private ngayNhap: Date;
    private donGia: number;
    private soLuong: number;
    private nhaXuatBan: string;

	public getDonGia(): number {
		return this.donGia;
	}

	public getSoLuong(): number {
		return this.soLuong;
	}

	public getNhaXuatBan(): string {
		return this.nhaXuatBan;
	}

    constructor(maSach: number, ngayNhap: Date, donGia: number, soLuong: number, nhaXuatBan: string) {
        this.maSach = maSach;
        this.ngayNhap = ngayNhap;
        this.donGia = donGia;
        this.soLuong = soLuong;
        this.nhaXuatBan = nhaXuatBan;
    }
}

class SachGiaoKhoa extends Sach {
    private tinhTrang: boolean;

    public getThanhTien() {
        if (this.tinhTrang)
            return this.getSoLuong() * this.getDonGia();
        else
            return this.getSoLuong() * this.getDonGia() / 2;
    }

    constructor(maSach: number, ngayNhap: Date, donGia: number, soLuong: number, nhaXuatBan: string, tinhTrang: boolean) {
        super(maSach, ngayNhap, donGia, soLuong, nhaXuatBan);
        this.tinhTrang = tinhTrang;
    }
}

class SachThamKhao extends Sach {
    private thue: number;

    public getThanhTien() {
        return this.getSoLuong() * this.getDonGia() + this.thue;
    }

    constructor(maSach: number, ngayNhap: Date, donGia: number, soLuong: number, nhaXuatBan: string, thue: number) {
        super(maSach, ngayNhap, donGia, soLuong, nhaXuatBan);
        this.thue = thue;
    }
}

function main() {
    let arr1: SachGiaoKhoa[] = [];;
    let arr2: SachThamKhao[] = [];;
    let tong1: number = 0;
    let tong2: number = 0;
    let soLuong2: number = 0;

    arr1.push(
        new SachGiaoKhoa(1, new Date(), 12000, 2, "Nghia", true),
        new SachGiaoKhoa(2, new Date(), 24000, 2, "Nghia 1", true),
        new SachGiaoKhoa(3, new Date(), 48000, 2, "Nghia", true),
    );

    arr2.push(
        new SachThamKhao(1, new Date(), 12000, 2, "Nghia", 1000),
        new SachThamKhao(2, new Date(), 24000, 2, "Nghia 3", 1000),
        new SachThamKhao(3, new Date(), 48000, 2, "Nghia 3", 1000),
    );

    for (let i = 0; i < 3; i++) {
        tong1 += arr1[i].getThanhTien();
        tong2 += arr2[i].getThanhTien();

        soLuong2 += arr2[i].getSoLuong();
    }

    console.log( "Tong thanh tien sach giao khoa: " + tong1 );
    console.log( "Tong thanh tien sach tham khao: " + tong2 );
    console.log( "Trung binh cong don gia cua sach tham khao: " + tong2 / soLuong2 );
    
}

main();