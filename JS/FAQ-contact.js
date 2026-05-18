
function validateForm() {
    var x =document.forms["confirm"]["code"].value;
    if (x!="") {
        alert("Thank you for your response!");
    }
    else {
        alert("Please let us know your opinion!");
    }
}

