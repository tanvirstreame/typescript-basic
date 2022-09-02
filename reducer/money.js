var moneys = [500, 50, 25];
var reduceFunc = function (total, num) {
    return total + num;
};
console.log("", moneys.reduce(reduceFunc));
