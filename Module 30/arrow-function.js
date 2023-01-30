function add(num1,num2=0){
    return num1+num2;
}

const ans = add(12,12);
console.log(ans);

const add2 = function add2(num1,num2){
    return num1+num2;
}

const sum2 = add2(1,2);
console.log(sum2);

const add3 = function(num1,num2){
    return num1+num2;
}

const sum3 = add3(11,2);
console.log(sum3);

const add4 = (num1,num2) => num1+num2;


const sum4 = add4(11,22);
console.log(sum4);