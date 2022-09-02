const moneys = [500, 50, 25];

const reduceFunc = (total: number, num: number) => {
    return total + num;
}

console.log("", moneys.reduce(reduceFunc));
