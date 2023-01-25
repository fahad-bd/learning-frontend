// console.log('js conected')

document.getElementById('deposit-button').addEventListener('click', function(){
    // console.log("clicked in deposit button");
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = parseFloat(depositInput.value);
    // console.log(depositAmount);
    
    //get current deposit
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    depositTotal.innerText = depositAmount;
    

    depositInput.value = '';
});