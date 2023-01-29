const numbers = [1,2,3,4,4,5,6,7,7,8,8,8,5,3,5,90];
const s = numbers.slice(0,4);
console.log(s);
console.log(numbers);

//splice to remove element 
const s1 = numbers.splice(0,4);
console.log(s1);
console.log(numbers);