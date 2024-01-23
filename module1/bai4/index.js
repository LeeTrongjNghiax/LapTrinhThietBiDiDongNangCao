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
var GiaoDich = /** @class */ (function () {
    function GiaoDich(maGiaoDich, ngayGiaoDich, donGia, dienTich) {
        this.maGiaoDich = maGiaoDich;
        this.ngayGiaoDich = ngayGiaoDich;
        this.donGia = donGia;
        this.dienTich = dienTich;
    }
    GiaoDich.prototype.getDonGia = function () {
        return this.donGia;
    };
    GiaoDich.prototype.getDienTich = function () {
        return this.dienTich;
    };
    GiaoDich.prototype.getThanhTien = function () {
    };
    return GiaoDich;
}());
var GiaoDichDat = /** @class */ (function (_super) {
    __extends(GiaoDichDat, _super);
    function GiaoDichDat(maGiaoDich, ngayGiaoDich, donGia, dienTich, loaiDat) {
        var _this = _super.call(this, maGiaoDich, ngayGiaoDich, donGia, dienTich) || this;
        _this.loaiDat = loaiDat;
        return _this;
    }
    GiaoDichDat.prototype.getThanhTien = function () {
        if (this.loaiDat == "A")
            return this.getDienTich() * this.getDonGia() * 1.5;
        else
            return this.getDienTich() * this.getDonGia();
    };
    return GiaoDichDat;
}(GiaoDich));
var GiaoDichNha = /** @class */ (function (_super) {
    __extends(GiaoDichNha, _super);
    function GiaoDichNha(maGiaoDich, ngayGiaoDich, donGia, dienTich, loaiNha, diaChi) {
        var _this = _super.call(this, maGiaoDich, ngayGiaoDich, donGia, dienTich) || this;
        _this.loaiNha = loaiNha;
        _this.diaChi = diaChi;
        return _this;
    }
    GiaoDichNha.prototype.getThanhTien = function () {
        if (this.loaiNha == "cao cap")
            return this.getDienTich() * this.getDonGia();
        else
            return this.getDienTich() * this.getDonGia() * 9 / 10;
    };
    return GiaoDichNha;
}(GiaoDich));
function main() {
    var arr1 = [];
    var arr2 = [];
    var tongSoLuong1 = 0;
    var tongSoLuong2 = 0;
    var tongTien2 = 0;
    arr1.push(new GiaoDichDat(1, new Date(), 10000000000, 50000, "A"), new GiaoDichDat(2, new Date(), 20000000000, 54000, "B"), new GiaoDichDat(3, new Date(), 15000000000, 45000, "C"));
    arr2.push(new GiaoDichNha(1, new Date(), 10000000000, 50000, "cao cap", "45/54 Van Kiep"), new GiaoDichNha(2, new Date(), 2000000000, 54000, "thuong", "45/4 Le Loi"), new GiaoDichNha(3, new Date(), 1000000000, 45000, "thuong", "4/54 Dinh Bo Linh"));
    for (var i = 0; i < 3; i++) {
        tongSoLuong1++;
        tongSoLuong2++;
        tongTien2 += arr1[i].getThanhTien();
    }
    console.log("Tong so luong cua giao dich dat: " + tongSoLuong1);
    console.log("Tong so luong cua giao dich nha: " + tongSoLuong2);
    console.log("Trung binh thanh tien cua giao dich dat: " + tongTien2 / tongSoLuong2);
}
main();
