

interface Person {
    name: string;
    fatherName: string;
    motherName: string;
}

interface Player {
    name: string;
    club: string;
    salary: number;
    wife?: string; //wife is optional 
}

const messy: Player = {
    name: 'L messy',
    club: 'abahani',
    salary: 123,
    wife: 'asa abar nai'
}

