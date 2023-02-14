document.getElementById("btn-withdraw").addEventListener("click", function () {
    const newWithdrawAmount = getInputValueById("withdraw-field");

    if (isNaN(newWithdrawAmount)) {
        alert("Please provide a valid number");
        return;
    }

    const prevWithdrawTotal = getElementValueById("withdraw-total");
    const prevBalanceTotal = getElementValueById("balance-total");

    if (newWithdrawAmount > prevBalanceTotal) {
        alert("Baap er bank e eto taka nei");
        return;
    }

    const withdrawTotal = prevWithdrawTotal + newWithdrawAmount;
    setTextElementValueById("withdraw-total", withdrawTotal);

    const newBalanceTotal = prevBalanceTotal - newWithdrawAmount;
    setTextElementValueById("balance-total", newBalanceTotal);
});
