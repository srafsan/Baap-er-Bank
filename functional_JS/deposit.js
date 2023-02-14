document.getElementById("btn-deposit").addEventListener("click", function () {
    const newDepositAmount = getInputValueById("deposit-field");

    if (isNaN(newDepositAmount)) {
        alert("Please provide a valid number");
        return;
    }

    const prevDepositTotal = getElementValueById("deposit-total");
    const depositTotal = prevDepositTotal + newDepositAmount;
    setTextElementValueById("deposit-total", depositTotal);

    const prevBalanceTotal = getElementValueById("balance-total");
    const newBalanceTotal = prevBalanceTotal + newDepositAmount;
    setTextElementValueById("balance-total", newBalanceTotal);
});
