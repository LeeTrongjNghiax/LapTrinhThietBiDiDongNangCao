class GiaoDich {
    private maGiaoDich: number;
    private ngayGiaoDich: Date;
    private donGia: number;
    private soLuong: number;

    public getSoLuong() {
        return this.soLuong;
    }

    public getDonGia() {
        return this.donGia;
    }

    constructor(maGiaoDich: number, ngayGiaoDich: Date, donGia: number, soLuong: number) {
        this.maGiaoDich = maGiaoDich;
        this.ngayGiaoDich = ngayGiaoDich;
        this.donGia = donGia;
        this.soLuong = soLuong;
    }
}

class GiaoDichVang extends GiaoDich {
    private loaiVang: string;

    public getThanhTien() {
        return this.getSoLuong() * this.getDonGia();
    }

    constructor(maGiaoDich: number, ngayGiaoDich: Date, donGia: number, soLuong: number, loaiVang: string) {
        super(maGiaoDich, ngayGiaoDich, donGia, soLuong);
        this.loaiVang = loaiVang;
    }
}

class GiaoDichTienTe extends GiaoDich {
    private tiGia: number;
    private loaiTienTe: string;

    public getThanhTien() {
        if ( this.loaiTienTe == "VND" )
            return this.getSoLuong() * this.getDonGia();
        else 
            return this.getSoLuong() * this.getDonGia() * this.tiGia;
    }

    constructor(maGiaoDich: number, ngayGiaoDich: Date, donGia: number, soLuong: number, tiGia: number, loaiTienTe: string) {
        super(maGiaoDich, ngayGiaoDich, donGia, soLuong);
        this.tiGia = tiGia;
        this.loaiTienTe = loaiTienTe;
    }
}

function main() {
    let arr1: GiaoDichVang[] = [];
    let arr2: GiaoDichTienTe[] = [];

    let tong1: number = 0;
    let tong2: number = 0;

    let trungBinh2: number = 0;

    arr1.push(
        new GiaoDichVang(1, new Date(), 2_000_000_000, 2, "case"), 
        new GiaoDichVang(2, new Date(), 1_000_000_000, 2, "case"), 
        new GiaoDichVang(3, new Date(), 3_000_000_000, 2, "case"), 
    );

    arr2.push(
        new GiaoDichTienTe(4, new Date(), 100_000_000, 2, 0.01, "USD"), 
        new GiaoDichTienTe(5, new Date(), 200_000_000, 2, 0.01, "VND"), 
        new GiaoDichTienTe(6, new Date(), 7_800_000_000, 2, 0.01, "USD"), 
    );

    for (let i = 0; i < 3; i++) {
        tong1 += arr1[i].getSoLuong();
        tong2 += arr2[i].getSoLuong();

        trungBinh2 += arr2[i].getThanhTien();
    }
    console.log("Tong so luong cho giao dich vang: " + tong1);
    console.log("Tong so luong cho giao dich tien te: " + tong2);
    console.log("Trung binh thanh tien cua giao dich tien te: " + trungBinh2 / tong2);
    
}

main();