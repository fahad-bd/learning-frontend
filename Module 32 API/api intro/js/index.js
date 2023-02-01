// console.log('js');
// java script object ontation JSON

const user = {id: 12, name:"BCD", job:'actor'};
const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);

//stringified to boject 
const converted = JSON.parse(stringified);
console.log(converted);