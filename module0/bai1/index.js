var Triangle = /** @class */ (function () {
    function Triangle(ma, mb, mc) {
        if (ma > 0 &&
            mb > 0 &&
            mc > 0) {
            if (ma + mb > mc ||
                ma + mc > mb ||
                mc + mb > ma) {
                this.ma = ma;
                this.mb = mb;
                this.mc = mc;
            }
            else {
                this.ma = 0;
                this.mb = 0;
                this.mc = 0;
            }
        }
        else {
            this.ma = 0;
            this.mb = 0;
            this.mc = 0;
        }
    }
    Object.defineProperty(Triangle.prototype, "$ma", {
        /**
         * Getter $ma
         * @return {number}
         */
        get: function () {
            return this.ma;
        },
        /**
         * Setter $ma
         * @param {number} value
         */
        set: function (value) {
            if (value > 0)
                this.ma = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "$mb", {
        /**
         * Getter $mb
         * @return {number}
         */
        get: function () {
            return this.mb;
        },
        /**
         * Setter $mb
         * @param {number} value
         */
        set: function (value) {
            if (value > 0)
                this.mb = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "$mc", {
        /**
         * Getter $mc
         * @return {number}
         */
        get: function () {
            return this.mc;
        },
        /**
         * Setter $mc
         * @param {number} value
         */
        set: function (value) {
            if (value > 0)
                this.mc = value;
        },
        enumerable: false,
        configurable: true
    });
    Triangle.prototype.getPerimeter = function () {
        return this.ma + this.mb + this.mc;
    };
    Triangle.prototype.getArea = function () {
        var p = this.getPerimeter() / 2;
        return Math.sqrt(p * (p - this.ma) * (p - this.mb) * (p - this.mc));
    };
    Triangle.prototype.getType = function () {
        if (this.ma + this.mb <= this.mc ||
            this.ma + this.mc <= this.mb ||
            this.mb + this.mc <= this.ma ||
            this.ma == 0 ||
            this.mb == 0 ||
            this.mc == 0)
            return "Not a triangle";
        if (this.ma == this.mb && this.ma == this.mc)
            return "Equilateral Triangle";
        if (this.ma == this.mb && this.mb != this.mc ||
            this.ma == this.mc && this.mc != this.mb ||
            this.mb == this.mc && this.mc != this.ma)
            return "Isosceles Triangle";
        return "Triangle";
    };
    Triangle.prototype.toString = function () {
        return "Sides: ".concat(this.ma, ", ").concat(this.mb, ", ").concat(this.mc, ". Type: ").concat(this.getType(), ". Perimeter: ").concat(this.getPerimeter(), ". Area: ").concat(this.getArea());
    };
    return Triangle;
}());
function main() {
    var t1 = new Triangle(3, 4, 0);
    var t2 = new Triangle(3, 4, 8);
    var t3 = new Triangle(6, 4, 5);
    var t4 = new Triangle(3, 4, 3);
    var t5 = new Triangle(4, 4, 4);
    console.log(t1.toString());
    console.log(t2.toString());
    console.log(t3.toString());
    console.log(t4.toString());
    console.log(t5.toString());
}
main();
