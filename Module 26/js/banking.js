// console.log('js conected')

function getInputValue(inputId)
{
    const inputFild = document.getElementById(inputId);
    const AmountText = inputFild.value;
    const amount = parseFloat(AmountText);
    inputFild.value = '';

    return amount;
}

function updateTotalFiled(inputId, amount)
{
    const total = document.getElementById(inputId);
    const totalText = total.innerText;
    const previousTotal = parseFloat(totalText);

    total.innerText = previousTotal + amount;
}

function getCurrentBalance()
{
    const total = document.getElementById('balance-total');
    const totalBalanceText = total.innerText;
    const previousBalance = parseFloat(totalBalanceText);

    return previousBalance;
}

function updateBalance(depositAmount, isAdd)
{
    const total = document.getElementById('balance-total');
    const previousBalance = getCurrentBalance();

    if(isAdd == 1){
        total.innerText = previousBalance + depositAmount;
    }
    else{
        total.innerText = previousBalance - depositAmount;
    } 
}

document.getElementById('deposit-button').addEventListener('click', function(){
    
    const depositAmount = getInputValue('deposit-input');
    
    if(depositAmount > 0)
    {
        updateTotalFiled('deposit-total',depositAmount);

        //update balance
        updateBalance(depositAmount, 1);
    }

});

//withdraw

document.getElementById('withdraw-button').addEventListener('click', function(){
    
    const withdrawAmount = getInputValue('withdraw-input');

    if(withdrawAmount > 0 && withdrawAmount <= getCurrentBalance())
    {
        updateTotalFiled('withdraw-total',withdrawAmount);

        //update balance 
        updateBalance(withdrawAmount, 0);
    }

});