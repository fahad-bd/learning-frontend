const names = ['a','b','c','a'];
function removeDuplicate(names){
    const u = [];
    for(const element of names){
        if(u.indexOf(element)==-1){
            u.push(element);
        }
    }
    return u;
}
const a = removeDuplicate(names);
console.log(a);
