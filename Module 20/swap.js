let a = 12;
let b = 13;
console.log(a,' ',b);
let temp = a;
a = b;
b = temp;
console.log(a,' ',b);

[a, b] = [b, a];
console.log(a,b);