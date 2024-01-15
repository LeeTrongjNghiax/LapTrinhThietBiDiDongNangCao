var ToaDo = /** @class */ (function () {
    function ToaDo(x, y) {
        if (x)
            this.x = x;
        if (y)
            this.y = y;
    }
    ToaDo.prototype.getTen = function () {
        return this.ten;
    };
    ToaDo.prototype.getX = function () {
        return this.x;
    };
    ToaDo.prototype.getY = function () {
        return this.y;
    };
    ToaDo.prototype.setTen = function (value) {
        this.ten = value;
    };
    ToaDo.prototype.setX = function (value) {
        this.x = value;
    };
    ToaDo.prototype.setY = function (value) {
        this.y = value;
    };
    ToaDo.prototype.toString = function () {
        return "";
    };
    return ToaDo;
}());
var HinhTron = /** @class */ (function () {
    function HinhTron(tam, banKinh) {
        if (tam)
            this.tam = tam;
        if (banKinh)
            this.banKinh = banKinh;
    }
    HinhTron.prototype.getTam = function () {
        return this.tam;
    };
    HinhTron.prototype.getBanKinh = function () {
        return this.banKinh;
    };
    HinhTron.prototype.setTam = function (value) {
        this.tam = value;
    };
    HinhTron.prototype.setBanKinh = function (value) {
        this.banKinh = this.banKinh;
    };
    HinhTron.prototype.tinhChuVi = function () {
        return Math.PI * 2 * this.banKinh;
    };
    HinhTron.prototype.tinhDienTich = function () {
        return Math.PI * this.banKinh * this.banKinh;
    };
    return HinhTron;
}());
function main() {
    var toaDo = new ToaDo(5, 5);
    toaDo.setTen("O");
    var o = new HinhTron(toaDo, 10.5);
    console.log("Hinh tron co tam ".concat(o.getTam().getTen(), "(").concat(o.getTam().getX(), ", ").concat(o.getTam().getY(), ") voi ban kinh ").concat(o.getBanKinh(), " co dien tich va chu vi lan luot la ").concat(o.tinhDienTich(), " va ").concat(o.tinhChuVi()));
}
main();
