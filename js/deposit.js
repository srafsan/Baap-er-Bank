document.getElementById("btn-deposit").addEventListener("click", function () {
    let depositField = document.getElementById("deposit-field");
    let depositAmount = depositField.value;
    depositAmount = parseFloat(depositAmount);

    if (isNaN(depositAmount)) {
        alert("Please provide a valid number");
        return;
    }

    let prevDepositTotalElement = document.getElementById("deposit-total");
    let prevDepositTotal = prevDepositTotalElement.innerText;
    prevDepositTotal = parseFloat(prevDepositTotal);

    let currDepositTotal = prevDepositTotal + depositAmount;
    prevDepositTotalElement.innerText = currDepositTotal;

    let balanceTotalElement = document.getElementById("balance-total");
    let prevBalanceTotal = balanceTotalElement.innerText;
    prevBalanceTotal = parseFloat(prevBalanceTotal);

    let currBalanceTotal = prevBalanceTotal + depositAmount;
    balanceTotalElement.innerText = currBalanceTotal;

    depositField.value = "";
});
