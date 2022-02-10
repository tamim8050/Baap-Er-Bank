// handle deposit button 
document.getElementById('Deposit-Button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);

    // update deposit total 
    const depositTotal = document.getElementById('deposit-total');

    const previousDpositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDpositText);
    const totalDposit = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = totalDposit;

    // update balance total 
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const totalBalance = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = totalBalance;
    // clear deposit input feild 
    depositInput.value = '';
})

// handel withdraw total with handeler

document.getElementById('withdraw-Button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');

    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(withdrawAmountText);

    // set withdraw total
    const withdrawToltal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawToltal.innerText;
    const previousWithdrwTotal = parseFloat(previousWithdrawText);
    const totalWithdraw = previousWithdrwTotal + newWithdrawAmount;
    withdrawToltal.innerText = totalWithdraw;

    // update balance total 

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const totalBalance = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = totalBalance;

    // clear deposit input feild 
    withdrawInput.value = '';
})



