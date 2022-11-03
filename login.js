function login() {
	var uname = document.getElementById("uname").value;
	var pwd = document.getElementById("pwd").value;
	var filter = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if (uname == '') {
		alert("please enter user name.");
	}
	else if (pwd == '') {
		alert("enter the password");
	}
	else if (!filter.test(uname)) {
		alert("Enter valid email id.");
	}
	else if (pwd.length < 3 || pwd.length > 12) {
		alert("Password charachter range 3-12 !.");
	}
	else {
		
		//Redirecting to other page or webste code or you can set your own html page.

		window.location.href = "homepage.html"
	}
}
//Reset Inputfield code.
