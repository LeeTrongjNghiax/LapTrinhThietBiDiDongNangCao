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
    function GiaoDich(maGiaoDich, ngayGiaoDich, donGia, soLuong) {
        this.maGiaoDich = maGiaoDich;
        this.ngayGiaoDich = ngayGiaoDich;
        this.donGia = donGia;
        this.soLuong = soLuong;
    }
    GiaoDich.prototype.getSoLuong = function () {
        return this.soLuong;
    };
    GiaoDich.prototype.getDonGia = function () {
        return this.donGia;
    };
    return GiaoDich;
}());
var GiaoDichVang = /** @class */ (function (_super) {
    __extends(GiaoDichVang, _super);
    function GiaoDichVang(maGiaoDich, ngayGiaoDich, donGia, soLuong, loaiVang) {
        var _this = _super.call(this, maGiaoDich, ngayGiaoDich, donGia, soLuong) || this;
        _this.loaiVang = loaiVang;
        return _this;
    }
    GiaoDichVang.prototype.getThanhTien = function () {
        return this.getSoLuong() * this.getDonGia();
    };
    return GiaoDichVang;
}(GiaoDich));
var GiaoDichTienTe = /** @class */ (function (_super) {
    __extends(GiaoDichTienTe, _super);
    function GiaoDichTienTe(maGiaoDich, ngayGiaoDich, donGia, soLuong, tiGia, loaiTienTe) {
        var _this = _super.call(this, maGiaoDich, ngayGiaoDich, donGia, soLuong) || this;
        _this.tiGia = tiGia;
        _this.loaiTienTe = loaiTienTe;
        return _this;
    }
    GiaoDichTienTe.prototype.getThanhTien = function () {
        if (this.loaiTienTe == "VND")
            return this.getSoLuong() * this.getDonGia();
        else
            return this.getSoLuong() * this.getDonGia() * this.tiGia;
    };
    return GiaoDichTienTe;
}(GiaoDich));
function main() {
    var arr1 = [];
    var arr2 = [];
    var tong1 = 0;
    var tong2 = 0;
    var trungBinh2 = 0;
    arr1.push(new GiaoDichVang(1, new Date(), 2000000000, 2, "case"), new GiaoDichVang(2, new Date(), 1000000000, 2, "case"), new GiaoDichVang(3, new Date(), 3000000000, 2, "case"));
    arr2.push(new GiaoDichTienTe(4, new Date(), 100000000, 2, 0.01, "USD"), new GiaoDichTienTe(5, new Date(), 200000000, 2, 0.01, "VND"), new GiaoDichTienTe(6, new Date(), 7800000000, 2, 0.01, "USD"));
    for (var i = 0; i < 3; i++) {
        tong1 += arr1[i].getSoLuong();
        tong2 += arr2[i].getSoLuong();
        trungBinh2 += arr2[i].getThanhTien();
    }
    console.log("Tong so luong cho giao dich vang: " + tong1);
    console.log("Tong so luong cho giao dich tien te: " + tong2);
    console.log("Trung binh thanh tien cua giao dich tien te: " + trungBinh2 / tong2);
}
main();
