const first = {a: 1, b: 2};
const second = {a: '1', b: 2};

function compareObjects(obj1, obj2){
    if(Object.keys(obj1).length !== Object.keys(obj2).length){
        return false;
    }

    for(const prop in obj1){
        if(obj1[prop] !== obj2[prop]){
            return false;
        }
    }

    return true;
}

const isEqual = compareObjects(first, second);
console.log(isEqual);


const obj ={a:1, b:7, c:3, length:2};
console.log(Object.keys(obj).length);

const obj1= {module: 35, video:2};
const obj2= {module: 35, video:2};
console.log(obj1 === obj2);

const getGirlFriend= (name = "chokina")=>"name"; console.log(getGirlFriend());