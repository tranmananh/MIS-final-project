function validateForm() {
    // Get form values
    const fullname = document.getElementById("fullname").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const birthdate = document.getElementById("birthdate").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const paymentMethod = document.getElementById("paymentMethod").value;

    // Validate that all fields are filled
    if (!fullname || !address || !email || !phone || !birthdate || !gender || !paymentMethod) {
        document.getElementById("error-message").style.display = "block";
        alert("You have to fill in all required fields.");
        return false;
    } else {
        alert("Your order is recorded. Thank you for choosing MATDATE!");
        return true;
    }
}

function showPaymentDetails() {
    const paymentMethod = document.getElementById("paymentMethod").value;
    const creditCardDetails = document.getElementById("credit-card-details");
    const codDetails = document.getElementById("cod-details");

    if (paymentMethod === "Credit Card") {
        creditCardDetails.style.display = "block";
        codDetails.style.display = "none";
    } else if (paymentMethod === "COD") {
        codDetails.style.display = "block";
        creditCardDetails.style.display = "none";
    } else {
        creditCardDetails.style.display = "none";
        codDetails.style.display = "none";
    }
}
