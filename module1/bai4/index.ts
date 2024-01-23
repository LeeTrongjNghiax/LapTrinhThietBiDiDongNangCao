class GiaoDich {
    private maGiaoDich: number;
    private ngayGiaoDich: Date;
    private donGia: number;
    private dienTich: number;

    public getDonGia() {
        return this.donGia;
    }

    public getDienTich() {
        return this.dienTich;
    }

    public getThanhTien() {

    }

    constructor(maGiaoDich: number, ngayGiaoDich: Date, donGia: number, dienTich: number) {
        this.maGiaoDich = maGiaoDich;
        this.ngayGiaoDich = ngayGiaoDich;
        this.donGia = donGia;
        this.dienTich = dienTich;
    }
}

class GiaoDichDat extends GiaoDich {
    private loaiDat: string;

    public getThanhTien() {
        if (this.loaiDat == "A")
            return this.getDienTich() * this.getDonGia() * 1.5;
        else 
            return this.getDienTich() * this.getDonGia();
    }

    constructor(maGiaoDich: number, ngayGiaoDich: Date, donGia: number, dienTich: number, loaiDat: string) {
        super(maGiaoDich, ngayGiaoDich, donGia, dienTich);
        this.loaiDat = loaiDat;
    }
}

class GiaoDichNha extends GiaoDich {
    private loaiNha: string;
    private diaChi: string;

    public getThanhTien() {
        if (this.loaiNha == "cao cap")
            return this.getDienTich() * this.getDonGia();
        else 
            return this.getDienTich() * this.getDonGia() * 9 / 10;
    }

    constructor(maGiaoDich: number, ngayGiaoDich: Date, donGia: number, dienTich: number, loaiNha: string, diaChi: string) {
        super(maGiaoDich, ngayGiaoDich, donGia, dienTich);
        this.loaiNha = loaiNha;
        this.diaChi = diaChi;
    }
}

function main() {
    let arr1: GiaoDichDat[] = [];
    let arr2: GiaoDichNha[] = [];
    let tongSoLuong1: number = 0;
    let tongSoLuong2: number = 0;

    let tongTien2: number = 0;

    arr1.push(
        new GiaoDichDat(1, new Date(), 10_000_000_000, 50000, "A"),
        new GiaoDichDat(2, new Date(), 20_000_000_000, 54000, "B"),
        new GiaoDichDat(3, new Date(), 15_000_000_000, 45000, "C"),
    );

    arr2.push(
        new GiaoDichNha(1, new Date(), 10_000_000_000, 50000, "cao cap", "45/54 Van Kiep"),
        new GiaoDichNha(2, new Date(), 2_000_000_000, 54000, "thuong", "45/4 Le Loi"),
        new GiaoDichNha(3, new Date(), 1_000_000_000, 45000, "thuong", "4/54 Dinh Bo Linh"),
    );

    for (let i = 0; i < 3; i++) {
        tongSoLuong1++;
        tongSoLuong2++;
        tongTien2 += arr1[i].getThanhTien();
    }

    console.log("Tong so luong cua giao dich dat: " + tongSoLuong1);
    console.log("Tong so luong cua giao dich nha: " + tongSoLuong2);
    console.log("Trung binh thanh tien cua giao dich dat: " + tongTien2 / tongSoLuong2);
}

main();