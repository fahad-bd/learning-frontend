let money: number = 5;
let honey: string = "Hi!";
let kony: boolean = true;
console.log(money);
console.log(honey);


function add(first: number, second: number): number
{
    const result = first+second;
    return result;
}

console.log(add(7,8));


function add2(first: number|string, second: number|string): number|string
{
    const result: string|number = first+second;
    return result;
}

let ans: number = add2(7,8);

console.log(ans);

const fullName: string = add2('Fahad', ' Ahammed');

console.log(fullName);
