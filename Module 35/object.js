// different way of boject
// 1
const student = {name: "Fhadd", job: 'devops'}

// 2
const person = new Object();
console.log(person);

// 3
const human = Object.create(student);
console.log(human);
console.log(human.name);

// 4
class People {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const P1 = new People('abc', 12);
console.log(P1);

// 5
function Manus(name){
    this.name = name;
}
const man = new Manus('rakib');
console.log(man);