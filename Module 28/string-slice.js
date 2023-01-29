const sentence = 'i am fahad Ahammed';
const words = sentence.split(' ');
console.log(words);
const words_A = sentence.split('a');
console.log(words_A);

const smallSlice = sentence.slice(2,7);
console.log(smallSlice);

//sub str
const anotherPart = sentence.substr(2,4);
console.log(anotherPart);

//sub string
const another_Part = sentence.substring(2,4);
console.log(another_Part);

//concat 
const a = 'fahad';
const b = 'ahammed';
// const name = a+b;
const name = a.concat(b);
console.log(name);

//join 
const woirds2 = ['i', 'am', 'a', 'student'];
// const allJoined = woirds2.join('');
const allJoined = woirds2.join(', ');
console.log(allJoined);
const allJoined1 = woirds2.join(' ');
console.log(allJoined1);