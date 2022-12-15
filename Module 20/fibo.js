function fibo(n){
    n[0]=0;
    n[1]=1;
    for(var i=2;i<7;i++){
        n[i]=n[i-1]+n[i-2];
    }
    return n;
}
var arr = [];
console.log(fibo(arr));