class Support {
    name;
    role = 'sopport web dev';

    constructor(name){
        this.name = name;
    }

    startSession()
    {
        console.log('start a support section');
    }
}

const amir = new Support();
amir.name = 'Amir Khan';
console.log(amir);

const jamil = new Support('Jamil');
console.log(jamil);