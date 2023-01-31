class TeamMember{
    name;
    role = 'sopport web dev';
    address = 'DB';
    constructor(name,address){
        this.name = name;
        this.address = address;
    }
}


class Support extends TeamMember{
    groupSupportTime;
    constructor(name,address,time){
        super(name, address);
        this.groupSupportTime = time;
    }

    startSession()
    {
        console.log('start a support section');
    }
}

class StudentCare extends TeamMember{

    buildARoutine()
    {
        console.log('Bild a routine');
    }
}

const amir = new Support('abc', 'bd', '8:12AM');
console.log(amir);

const jamil = new Support('Jamil');
console.log(jamil);