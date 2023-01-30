const fish = {id:12, name: 'king hilsha', price:900, phone:'0123456789', address:'chadpur', dress:'silver'};
console.log(fish.phone);



const {phone, price, dress, id} = fish;
console.log(phone,price);
console.log(id);

const company = {
    name: 'Fhad',
    ceo: {id1:123, selary:2345, name: 'rakib'}
}

const {id1,selary,name} = company.ceo;
console.log(id1);
