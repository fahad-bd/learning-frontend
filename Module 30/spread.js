const numbers = [23, 65, 99, 21, 34];
console.log(numbers);
console.log(...numbers);

console.log(Math.max(numbers));
console.log(Math.max(...numbers));

const numbers2 = numbers;
numbers.push(123);
console.log(numbers2);

const numbers3 = [...numbers];
numbers.push(12);
console.log(numbers3);
console.log(numbers2);

const numbers4 = [0, ...numbers, 90];
console.log(numbers4);
