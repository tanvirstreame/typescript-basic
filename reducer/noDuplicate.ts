const myArray: string[] = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
const myArrayWithNoDuplicates = myArray.reduce((previousValue: string[], currentValue: string) => {
  if (previousValue.indexOf(currentValue) === -1) {
    previousValue.push(currentValue);
  }
  return previousValue;
}, []);

console.log(myArrayWithNoDuplicates);