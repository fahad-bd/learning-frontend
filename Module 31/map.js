const numbers = [1,2,3,4,5,6,7,8,9];
function makeDouble(num){
    return num*2;
}
const doubleNumbers = numbers.map(makeDouble);
console.log(doubleNumbers);