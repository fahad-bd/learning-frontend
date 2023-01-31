const friends = ['rakib', 'rakman', 'rifat'];
const fLenths = friends.map(friend => friend.length);
console.log(fLenths);


const products = [
    {name: 'water bottle', price: 50, color: 'yellow'},
    {name: 'mobile phone', price: 1050, color: 'black'},
    {name: 'smart watch', price: 500, color: 'yellow'},
    {name: 'sticky note', price: 30, color: 'pink'}
]

const productName = products.map(product => product.name);
console.log(productName);