// Get HTML elements for the bill amount, tip slider, tip percentage, tip amount, and total amount
const billTotal = document.getElementById('billTotal');
const tipSlider = document.getElementById('tipSlider');
const tipPercentage = document.getElementById('tipPercentage');
const tipAmount = document.getElementById('tipAmount');
const totalWithTip = document.getElementById('totalWithTip');

// Add an 'input' event listener to the form, which will be triggered whenever any input field within the form changes
document.getElementById('tipForm').addEventListener('input', function() {
    // Convert the bill amount and tip percentage from the form to floating-point numbers
    let bill = parseFloat(billTotal.value);
    let tip = parseFloat(tipSlider.value);

    // Check if the bill amount is a valid number and alert the user if it's not
    if (isNaN(bill)) {
        alert("Please enter a valid bill amount.");
        return;
    }

    // Calculate the tip amount and the total amount to be paid
    let tipValue = (bill * tip) / 100;
    let total = bill + tipValue;

    // Update the displayed tip percentage, calculated tip amount, and total amount
    tipPercentage.textContent = tip + "%";
    tipAmount.value = tipValue.toFixed(2);
    totalWithTip.value = total.toFixed(2);
});
