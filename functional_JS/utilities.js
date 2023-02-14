// Deposit section

function getInputValueById(inputId) {
    let inputField = document.getElementById(inputId);
    let inputFieldValue = parseFloat(inputField.value);

    return inputFieldValue;
}

function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const value = parseFloat(element.innerText);

    return value;
}

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}
