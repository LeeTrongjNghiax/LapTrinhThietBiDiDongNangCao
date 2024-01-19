var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var KhachHang = /** @class */ (function () {
    function KhachHang(maKhachHang, hoTen, ngayLapHoaDon, soKW, donGia) {
        this.maKhachHang = maKhachHang;
        this.hoTen = hoTen;
        this.ngayLapHoaDon = ngayLapHoaDon;
        this.soKW = soKW;
        this.donGia = donGia;
    }
    KhachHang.prototype.getSoKW = function () {
        return this.soKW;
    };
    KhachHang.prototype.getDonGia = function () {
        return this.donGia;
    };
    KhachHang.prototype.getThanhTien = function () {
    };
    return KhachHang;
}());
var KhachHangVietNam = /** @class */ (function (_super) {
    __extends(KhachHangVietNam, _super);
    function KhachHangVietNam(maKhachHang, hoTen, ngayLapHoaDon, soKW, donGia, doiTuong, dinhMuc) {
        var _this = _super.call(this, maKhachHang, hoTen, ngayLapHoaDon, soKW, donGia) || this;
        _this.doiTuong = doiTuong;
        _this.dinhMuc = dinhMuc;
        return _this;
    }
    KhachHangVietNam.prototype.getThanhTien = function () {
        if (this.getSoKW() <= this.dinhMuc)
            return this.getSoKW() * this.getDonGia();
        else
            return this.getSoKW() * this.getDonGia() * this.dinhMuc + (this.getSoKW() - this.dinhMuc * this.getDonGia() * 2.5);
    };
    return KhachHangVietNam;
}(KhachHang));
var KhachHangNuocNgoai = /** @class */ (function (_super) {
    __extends(KhachHangNuocNgoai, _super);
    function KhachHangNuocNgoai(maKhachHang, hoTen, ngayLapHoaDon, soKW, donGia, quocTich) {
        var _this = _super.call(this, maKhachHang, hoTen, ngayLapHoaDon, soKW, donGia) || this;
        _this.quocTich = _this.quocTich;
        return _this;
    }
    KhachHangNuocNgoai.prototype.getThanhTien = function () {
        return this.getSoKW() * this.getDonGia();
    };
    return KhachHangNuocNgoai;
}(KhachHang));
function main() {
    var arr1 = [];
    var arr2 = [];
    var tongSoLuong1 = 0;
    var tongSoLuong2 = 0;
    var tongThanhTien2 = 0;
    arr1.push(new KhachHangVietNam(1, "Le Nghia", new Date(), 35, 12000, "Dan", 12000), new KhachHangVietNam(2, "Long", new Date(), 34, 11500, "Lmao", 16000), new KhachHangVietNam(3, "Khoa", new Date(), 46, 12000, "Vi", 14000));
    arr2.push(new KhachHangNuocNgoai(4, "Bob", new Date(), 34, 10000, "Phap"), new KhachHangNuocNgoai(5, "Jon", new Date(), 64, 7500, "My"), new KhachHangNuocNgoai(6, "Cali", new Date(), 65, 21000, "Trung"));
    for (var i = 0; i < 3; i++) {
        tongSoLuong1++;
        tongSoLuong2++;
        tongThanhTien2 += arr2[i].getThanhTien();
    }
    console.log("Tong so luong khach hang viet nam: " + tongSoLuong1);
    console.log("Tong so luong khach hang nuoc ngoai: " + tongSoLuong2);
    console.log("Trung binh thanh tien cua khach hang nuoc ngoai: " + tongThanhTien2 / tongSoLuong2);
}
main();
