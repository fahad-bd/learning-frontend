const products = [
    'apple',
    'mango',
    'banana',
    'lechy',
    'water',
    'pc',
    'mac',
    'apple mobile',
    'apple mouse',
    'Apple pc'
];

const searching = 'apple';
//indexOf
const output = [];
for(const product of products){
    if(product.toLowerCase().indexOf(searching.toLowerCase()) != -1){
        output.push(product);
    }
}
console.log(output);

//inclodes
const out = [];
for(const product of products){
    if(product.toLowerCase().includes(searching.toLowerCase())){
        out.push(product);
    }
}

console.log(out);

//starts with 
const out2 = [];
for(const product of products){
    if(product.toLowerCase().startsWith(searching.toLowerCase())){
        console.log(product);
    }
}