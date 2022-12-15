function seerToMon(n){
    if(typeof(n) != 'number') return 'Wrong input';
    return n/40;
}
const n = 50;
console.log(seerToMon(n));

function totalSales(a,b,c){
    if(typeof(a)!='number' || typeof(b)!='number' || typeof(c)!='number') return 'Wrong input';
    return (a*100)+(b*200)+(c*500);
}
const a=1,b=1,c=1;
console.log(totalSales(a,b,c));

function deliveyCost(n){
    if(typeof(n)!='number') return 'Error';
    let totalCost = 0;
    if(n<=100){
        totalCost = totalCost + (n*100);
    }
    else if(n>100 && n<=200){
        totalCost = (100*100)+((n-100)*80);
    }
    else {
        totalCost = totalCost + (100*100);
        totalCost = totalCost + (100*80);
        totalCost = totalCost + ((n-200)*50);
    }
    return totalCost;
}

console.log(500);


function perfectFriend(friends){
    let n=0;
    for(let i of friends){
        
        if(n==5){
            return i;
        }
    }
    return -1;
}

friends = ['abcde','a','ab','abc'];
console.log(perfectFriend(friends));