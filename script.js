// Function for Increase and Decrease input value
function handleSeat(isIncrease, seat) {
    const seatInput = document.getElementById(seat + "-quantity")
    const seatCount = parseInt(seatInput.value)
    let seatNewCount = seatCount
    if (isIncrease == true) {
        seatNewCount = seatCount + 1
    } else if (isIncrease == false && seatCount > 0) {
        seatNewCount = seatCount - 1
    }
    seatInput.value = seatNewCount;

    calculateTotal();
}


// Function for Get input value
function getInputValue(seat) {
    const seatInput = document.getElementById(seat + '-quantity');
    const seatCount = parseInt(seatInput.value);
    return seatCount;
}


// Function for calculate sub-total, tax and grand-total
function calculateTotal() {
    const firstClassCount = getInputValue('first-class');
    const economyCount = getInputValue('economy');
    const totalPrice = firstClassCount * 150 + economyCount * 100;
    document.getElementById('subtotal').innerText = '$' + totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax-amount').innerText = '$' + tax;

    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = '$' + grandTotal;
}


// Function for show success message
function successMessage() {
    var grandTotal = document.getElementById('grand-total').innerText;
    if (grandTotal !== '$0') {
        document.getElementById('submit').style.display = "none";
        document.getElementById('message').style.display = "block";
        var x = document.getElementsByClassName("control");
        for (var i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
    }
}