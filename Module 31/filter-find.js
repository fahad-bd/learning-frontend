const numbers = [5,12,67,98,12,5];
const bigNumbers = numbers.filter(number => number > 20);
console.log(bigNumbers);

const evenNumber = numbers.find(number => number%2 == 0);
console.log(evenNumber);