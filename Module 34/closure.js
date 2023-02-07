function inc(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

let a = inc();
console.log(a());
console.log(a());
console.log(a());

let b = inc();
console.log(b);
console.log(b());
console.log(b());