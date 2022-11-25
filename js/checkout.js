
// Exercise 7
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.querySelector("#fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.querySelector("#fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");  
	var errorAddress = document.getElementById("errorAddress"); 
	var errorLastN = document.getElementById("errorLastN"); 
	var errorPassword = document.getElementById("errorPassword");
	// Validate fields entered by the user: name, phone, password, and email
	//Validate the name
	if(fName.value == "" || !isNaN(fName.value) || (fName.value).length < 3){
		errorName.innerHTML = "This field is required and must have, at least, 3 characters";
		fName.style.border = "1px solid red"
		error++;
	}else{
		errorName.innerHTML = "";
		fName.style.border = "1px solid gray"
		error = 0;
	}

	//Validate the email
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(fEmail.value == "" || !regex.test(fEmail.value) || (fEmail.value).length < 3){
		errorEmail.innerHTML = "This field is required and must contain an '@' and have, at least, 3 characters";
		fEmail.style.border = "1px solid red"
		error++;
	}else{
		errorEmail.innerHTML = "";
		fEmail.style.border = "1px solid gray"
		error = 0;
	}

	//Validate the Address
	if(fAddress.value == "" || (fAddress.value).length < 3){
		errorAddress.innerHTML = "This field is required and must have, at least, 3 characters";
		fAddress.style.border = "1px solid red"
		error++;
	}else{
		errorAddress.innerHTML = "";
		fAddress.style.border = "1px solid gray"
	}

	//Validate de LastName
	if(fLastN.value == "" || !isNaN(fLastN.value) || (fLastN.value).length < 3){
		errorLastN.innerHTML = "This field is required and must have, at least, 3 characters";
		fLastN.style.border = "1px solid red"
		error++;
	}else{
		errorLastN.innerHTML = "";
		fLastN.style.border = "1px solid gray"
		error = 0;
	}

	//Validate the Password
	if(fPassword.value == "" || (fPassword.value).length < 3){
		errorPassword.innerHTML = "Enter a correct password"
		fPassword.style.border = "1px solid red"
	}else{
		errorPassword.innerHTML = "";
		fPassword.style.border = "1px solid gray"
		error = 0;
	}

	//Validate de phone
	var tel = /^\d{9}$/
	if(fPhone.value == "" || !tel.test(fPhone.value) || !isNaN(fPhone)){
		errorPhone.innerHTML = "Invalid phone number!! Must be 9 digits with no letters"
		fPhone.style.border = "1px solid red"
	}else{
		errorPhone.innerHTML = "";
		fPhone.style.border = "1px solid gray"
		error = 0;
	}
	
	if(error>0){
	
	}else{
		
	}

}


