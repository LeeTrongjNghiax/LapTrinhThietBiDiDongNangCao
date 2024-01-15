var Vehicle = /** @class */ (function () {
    function Vehicle(owner, type, cost, cylinder) {
        this.owner = owner;
        this.type = type;
        this.cost = cost;
        this.cylinder = cylinder;
    }
    Object.defineProperty(Vehicle.prototype, "$owner", {
        /**
         * Getter $owner
         * @return {string}
         */
        get: function () {
            return this.owner;
        },
        /**
         * Setter $owner
         * @param {string} value
         */
        set: function (value) {
            this.owner = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "$type", {
        /**
         * Getter $type
         * @return {string}
         */
        get: function () {
            return this.type;
        },
        /**
         * Setter $type
         * @param {string} value
         */
        set: function (value) {
            this.type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "$cost", {
        /**
         * Getter $cost
         * @return {number}
         */
        get: function () {
            return this.cost;
        },
        /**
         * Setter $cost
         * @param {number} value
         */
        set: function (value) {
            this.cost = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "$cylinder", {
        /**
         * Getter $cylinder
         * @return {number}
         */
        get: function () {
            return this.cylinder;
        },
        /**
         * Setter $cylinder
         * @param {number} value
         */
        set: function (value) {
            this.cylinder = value;
        },
        enumerable: false,
        configurable: true
    });
    Vehicle.prototype.getTax = function () {
        if (this.cylinder > 200)
            return this.cost * 5 / 100;
        else if (this.cylinder >= 100 && this.cylinder <= 200)
            return this.cost * 3 / 100;
        else
            return this.cost * 1 / 100;
    };
    Vehicle.prototype.toString = function () {
        return "".concat(this.owner, ", ").concat(this.type, ", ").concat(this.cylinder, ", ").concat(this.$cost, ", ").concat(this.getTax());
    };
    return Vehicle;
}());
function main() {
    var xe1 = new Vehicle("Nguyen Thu Loan", "Future Neo", 35000000, 100);
    var xe2 = new Vehicle("Le Minh Tinh", "Ford Ranger", 250000000, 3000);
    var xe3 = new Vehicle("Nguyen Minh Triet", "Landscape", 1000000000, 1500);
    console.log("Tên chủ xe | Loại xe | Dung tích | Trị giá | Thuế phải nộp");
    console.log(xe1.toString());
    console.log(xe2.toString());
    console.log(xe3.toString());
}
main();
