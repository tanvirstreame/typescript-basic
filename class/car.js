var Car = /** @class */ (function () {
    function Car(_a) {
        var id = _a.id, name = _a.name, price = _a.price;
        this.id = id;
        this.name = name;
        this.price = price;
    }
    return Car;
}());
var car = new Car({ id: 0, name: "Audi", price: 200000 });
console.log(car);
