
function dangnhap() {
	var ten =document.getElementsByName('sign')[0].value;
	var pw =document.getElementsByName('pass')[0].value;
	if (ten =="ueh" && pw =="123456") {
		alert ('Log in sucessful!')
	}
	
	else if (ten =="" || pw =="") {
		alert ('Please fill all the fields');
	}
	else {
		alert ('Wrong username or password');
	}
	
}
function dangki() {
	var firstname=document.getElementsByName('firstname')[0].value.trim();
    var lastname=document.getElementsByName('lastname')[0].value.trim();
	var username=document.getElementsByName('username')[0].value.trim();
	var pass=document.getElementsByName('pazsword')[0].value.trim();
	var email=document.getElementsByName('email')[0].value.trim();
	var phonenum=document.getElementsByName('phonenumber')[0].value.trim();
	var age=document.getElementsByName('Age')[0].value;
	if (firstname =="" || lastname =="" || username =="" || pass =="" || email =="" || phonenum =="" || age =="select") {
		alert ('Please make sure to fill in all fields');
	}
	else {
		alert ('Register sucessfully');
	}

}

function redirectToSignup() {
    document.body.style.transition = "opacity 1s";
    document.body.style.opacity = "0";

    setTimeout(function() {
        window.location.href = "SIGNUP.html";
    }, 500);
}