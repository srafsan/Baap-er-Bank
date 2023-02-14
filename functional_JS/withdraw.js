document.getElementById("btn-withdraw").addEventListener("click", function () {
    const newWithdrawAmount = getInputValueById("withdraw-field");
    const prevWithdrawTotal = getElementValueById("withdraw-total");
    const withdrawTotal = prevWithdrawTotal + newWithdrawAmount;
    setTextElementValueById("withdraw-total", withdrawTotal);

    const prevBalanceTotal = getElementValueById("balance-total");
    const newBalanceTotal = prevBalanceTotal - newWithdrawAmount;
    setTextElementValueById("balance-total", newBalanceTotal);
});
