// handle deposit button even 
document.getElementById('deposit-button').addEventListener('click', function(){
    // console.log('deposit button clicked!');
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;
    // console.log(depositAmount);

    const depositTotal = document.getElementById('deposit-total');
    // console.log(depositTotal.innerText);
    const previousDepositAmonunt = depositTotal.innerText;
    const newDepositAmount = parseFloat(previousDepositAmonunt) + parseFloat(depositAmount);
    depositTotal.innerText = newDepositAmount;


    //update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + parseFloat(depositAmount);
    balanceTotal.innerText = newBalanceTotal;


    //clear the deposit input field
    depositInput.value = '';
});

//handle withdraw
document.getElementById('withdraw-button').addEventListener('click', function(){
    // console.log('with draw click');
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    // console.log(withdrawAmountText);
    const newWithdrawAmount = parseFloat(withdrawAmountText);

    //set withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTota = parseFloat(previousWithdrawTotalText);

    const newWithdrawTotal = previousWithdrawTota + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;


    withdrawInput.value = '';
});