function factrual(n)
{
    if(n == 0) return 1;
    return n * factrual(n-1);
}

console.log(factrual(5));