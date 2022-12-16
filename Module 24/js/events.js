// change color by call function in onclick 

function makeRed(){
    document.body.style.backgroundColor = 'black';
}


// change color by id 

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}
const blueButton = document.getElementById('blueButton');
blueButton.onclick = makeBlue;


// green button
const greenButton = document.getElementById('greenButton');
greenButton.onclick = function makeGreen(){
    document.body.style.backgroundColor = 'green';
}



// golden rod
const goldenRodButton = document.getElementById('goldenRodButton');
goldenRodButton.addEventListener('click', makeGoldenRod);

function makeGoldenRod(){
    document.body.style.backgroundColor = 'goldenrod';
}

/*
// other way
document.getElementById('goldenRodButton').addEventListener('click',function makeGoldenRod(){
    document.body.style.backgroundColor = 'goldenrod';
})

//other way
document.getElementById('goldenRodButton').addEventListener('click',function (){
    document.body.style.backgroundColor = 'goldenrod';
})
*/