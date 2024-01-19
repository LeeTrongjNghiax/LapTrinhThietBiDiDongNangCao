class KhachHang {
    private maKhachHang: number;
    private hoTen: string;
    private ngayLapHoaDon: Date;
    private soKW: number;
    private donGia: number;

    public getSoKW() {
        return this.soKW;
    }

    public getDonGia() {
        return this.donGia;
    }

    public getThanhTien() {

    }

    constructor(maKhachHang: number, hoTen: string, ngayLapHoaDon: Date, soKW: number, donGia: number) {
        this.maKhachHang = maKhachHang;
        this.hoTen = hoTen;
        this.ngayLapHoaDon = ngayLapHoaDon;
        this.soKW = soKW;
        this.donGia = donGia;
    }
}

class KhachHangVietNam extends KhachHang {
    private doiTuong: string;
    private dinhMuc: number;

    public getThanhTien() {
        if (this.getSoKW() <= this.dinhMuc)
            return this.getSoKW() * this.getDonGia();
        else 
            return this.getSoKW() * this.getDonGia() * this.dinhMuc + (this.getSoKW() - this.dinhMuc * this.getDonGia() * 2.5);
    }

    constructor(maKhachHang: number, hoTen: string, ngayLapHoaDon: Date, soKW: number, donGia: number, doiTuong: string, dinhMuc: number) {
        super(maKhachHang, hoTen, ngayLapHoaDon, soKW, donGia);
        this.doiTuong = doiTuong;
        this.dinhMuc = dinhMuc;
    }
}

class KhachHangNuocNgoai extends KhachHang {
    private quocTich: string;

    public getThanhTien() {
        return this.getSoKW() * this.getDonGia();
    }

    constructor(maKhachHang: number, hoTen: string, ngayLapHoaDon: Date, soKW: number, donGia: number, quocTich: string) {
        super(maKhachHang, hoTen, ngayLapHoaDon, soKW, donGia);
        this.quocTich = this.quocTich;
    }
}

function main() {
    let arr1: KhachHangVietNam[] = [];
    let arr2: KhachHangNuocNgoai[] = [];
    let tongSoLuong1: number = 0;
    let tongSoLuong2: number = 0;

    let tongThanhTien2: number = 0;

    arr1.push(
        new KhachHangVietNam(1, "Le Nghia", new Date(), 35, 12000, "Dan", 12000),
        new KhachHangVietNam(2, "Long", new Date(), 34, 11500, "Lmao", 16000),
        new KhachHangVietNam(3, "Khoa", new Date(), 46, 12000, "Vi", 14000),
    );

    arr2.push(
        new KhachHangNuocNgoai(4, "Bob", new Date(), 34, 10000, "Phap"),
        new KhachHangNuocNgoai(5, "Jon", new Date(), 64, 7500, "My"),
        new KhachHangNuocNgoai(6, "Cali", new Date(), 65, 21000, "Trung"),
    );

    for (let i = 0; i < 3; i++) {
        tongSoLuong1++;
        tongSoLuong2++;

        tongThanhTien2 += arr2[i].getThanhTien();
    }

    console.log("Tong so luong khach hang viet nam: " + tongSoLuong1);
    console.log("Tong so luong khach hang nuoc ngoai: " + tongSoLuong2);
    console.log("Trung binh thanh tien cua khach hang nuoc ngoai: " + tongThanhTien2 / tongSoLuong2);
}

main();