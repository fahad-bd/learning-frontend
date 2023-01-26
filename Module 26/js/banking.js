// console.log('js conected')

function getInputValue(inputId)
{
    const inputFild = document.getElementById(inputId);
    const AmountText = inputFild.value;
    const amount = parseFloat(AmountText);
    inputFild.value = '';

    return amount;
}


document.getElementById('deposit-button').addEventListener('click', function(){
    
    const depositAmount = getInputValue('deposit-input');
    
    //get current deposit
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);

    depositTotal.innerText = depositAmount + previousDepositTotal;

    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const totalBalanceText = balanceTotal.innerText;
    const previousBalance = parseFloat(totalBalanceText);

    balanceTotal.innerText = previousBalance + depositAmount;
    

    // depositInput.value = '';
});

//withdraw

document.getElementById('withdraw-button').addEventListener('click', function(){
    
    const withdrawAmount = getInputValue('withdraw-input');

    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalAmount = parseFloat(withdrawTotal.innerText);
    

    withdrawTotal.innerText = withdrawAmount + withdrawTotalAmount;

    //update balance 
    const balanceTotal = document.getElementById('balance-total');
    const totalBalanceText = balanceTotal.innerText;
    const previousBalance = parseFloat(totalBalanceText);

    balanceTotal.innerText = previousBalance - withdrawAmount;

    // withdrawInput.value = '';
});