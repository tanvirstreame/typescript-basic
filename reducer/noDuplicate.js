var myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
var myArrayWithNoDuplicates = myArray.reduce(function (previousValue, currentValue) {
    if (previousValue.indexOf(currentValue) === -1) {
        previousValue.push(currentValue);
    }
    return previousValue;
}, []);
console.log(myArrayWithNoDuplicates);
