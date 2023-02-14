document.getElementById("btn-withdraw").addEventListener("click", function () {
    let withdrawField = document.getElementById("withdraw-field");
    let withdrawAmount = withdrawField.value;
    withdrawAmount = parseFloat(withdrawAmount);

    if (isNaN(withdrawAmount)) {
        alert("Please provide a valid number");
        return;
    }

    let prevWithdrawTotalElement = document.getElementById("withdraw-total");
    let prevWithdrawTotal = prevWithdrawTotalElement.innerText;
    prevWithdrawTotal = parseFloat(prevWithdrawTotal);

    let balanceTotalElement = document.getElementById("balance-total");
    let prevBalanceTotal = balanceTotalElement.innerText;
    prevBalanceTotal = parseFloat(prevBalanceTotal);

    withdrawField.value = "";

    if (withdrawAmount > prevBalanceTotal) {
        alert("Baap er bank e eto taka nai");
        return;
    }

    let currWithdrawTotal = prevWithdrawTotal + withdrawAmount;
    prevWithdrawTotalElement.innerText = currWithdrawTotal;

    let currBalanceTotal = prevBalanceTotal - withdrawAmount;
    balanceTotalElement.innerText = currBalanceTotal;
});
