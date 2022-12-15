const n = 'fahad ahammed';
function reverse(n){
    let rev = '';
    for(let letter of n){
        rev = letter + rev;
    }
    return rev;
}

console.log(reverse(n));