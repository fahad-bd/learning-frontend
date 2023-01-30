const add = (num1,num2) => num1+num2;
console.log(add(1,2));

const multiply = (num1,num2,num3) =>num1*num2*num3;
console.log(multiply(1,2,3));

const getName = () => "Fahad Ahammed";
console.log(getName());

const doMath = (x,y) => {
    const sum = x+y;
    const diff = x-y;
    const result = sum * diff;
    return result;
}

console.log(doMath(1,2));