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
var ChuyenXe = /** @class */ (function () {
    function ChuyenXe(maSo, hoTen, soXe, doanhThu) {
        this.maSo = maSo;
        this.hoTen = hoTen;
        this.soXe = soXe;
        this.doanhThu = doanhThu;
    }
    ChuyenXe.prototype.getDoanhThu = function () {
        return this.doanhThu;
    };
    return ChuyenXe;
}());
var ChuyenXeNoiThanh = /** @class */ (function (_super) {
    __extends(ChuyenXeNoiThanh, _super);
    function ChuyenXeNoiThanh(maSo, hoTen, soXe, doanhThu, soTuyen, soKm) {
        var _this = _super.call(this, maSo, hoTen, soXe, doanhThu) || this;
        _this.soTuyen = _this.soTuyen;
        _this.soKm = _this.soKm;
        return _this;
    }
    return ChuyenXeNoiThanh;
}(ChuyenXe));
var ChuyenXeNgoaiThanh = /** @class */ (function (_super) {
    __extends(ChuyenXeNgoaiThanh, _super);
    function ChuyenXeNgoaiThanh(maSo, hoTen, soXe, doanhThu, noiDen, soNgay) {
        var _this = _super.call(this, maSo, hoTen, soXe, doanhThu) || this;
        _this.noiDen = _this.noiDen;
        _this.soNgay = _this.soNgay;
        return _this;
    }
    return ChuyenXeNgoaiThanh;
}(ChuyenXe));
function main() {
    var arr = [];
    arr.push(new ChuyenXeNoiThanh(1, "Lmao", 123456, 1200000, 24, 9), new ChuyenXeNoiThanh(1, "Lmao", 123456, 1200000, 25, 8), new ChuyenXeNgoaiThanh(2, "Tien", 123456, 12200000, "Ho Chi Minh", 2), new ChuyenXeNgoaiThanh(2, "Tien", 123456, 11200000, "Ho Chi Minh", 3));
    var tong = 0;
    var tongNoi = 0;
    var tongNgoai = 0;
    for (var i = 0; i < arr.length; i++) {
        tong += arr[i].getDoanhThu();
        if (arr[i] instanceof ChuyenXeNoiThanh) {
            tongNoi += arr[i].getDoanhThu();
        }
        else {
            tongNgoai += arr[i].getDoanhThu();
        }
    }
    console.log("Tong doanh thu tat ca chuyen xe: " + tong);
    console.log("Tong doanh thu chuyen xe noi thanh: " + tongNoi);
    console.log("Tong doanh thu chuyen xe ngoai thanh: " + tongNgoai);
}
main();
