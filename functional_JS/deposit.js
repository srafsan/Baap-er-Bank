document.getElementById("btn-deposit").addEventListener("click", function () {
    const newDepositAmount = getInputValueById("deposit-field");
    const prevDepositTotal = getElementValueById("deposit-total");
    const depositTotal = prevDepositTotal + newDepositAmount;
    setTextElementValueById("deposit-total", depositTotal);

    const prevBalanceTotal = getElementValueById("balance-total");
    const newBalanceTotal = prevBalanceTotal + newDepositAmount;
    setTextElementValueById("balance-total", newBalanceTotal);
});
