function checkValue(data){
	if (data == "") {
		return false;
	}else{
		return true;
	}
}

function checkMail(data){
	if(data.match(/@/)){
		return true;
	}else{
		return false;
	}
}



function checkpass(data){
	if (data.length ==11) {
		return true;
	}else{
		return false;
	}
}



function validation(){
	firstnameId = document.getElementById("firstname");
	firstname = firstnameId.value;
	error = 0;

	firstnameId.onclick = function(){
		firstnameId.classList.remove("back_img");
		document.getElementById("name_info").style.display = "block";
		document.getElementById("surename_info").style.display = "none";
		document.getElementById("mobile_info").style.display = "none";
		document.getElementById("pass_info").style.display = "none";
	}
	firstnameId.onchange = function(){
		document.getElementById("name_info").style.display = "none";
	}
	

	// surname input validation.
	lastnameId=document.getElementById("lastname");
	lastname =lastnameId.value;

	lastnameId.onclick = function(){
		lastnameId.classList.remove("back_img");
		document.getElementById("name_info").style.display = "none";
		document.getElementById("surename_info").style.display = "block";
		document.getElementById("mobile_info").style.display = "none";
		document.getElementById("pass_info").style.display = "none";
	}
	lastnameId.onchange=function(){
		document.getElementById("surename_info").style.display="none";
	}
  // email input validation
  
  emailId =document.getElementById("email");
  email =emailId.value;

  emailId.onclick = function(){
  	emailId.classList.remove("back_img");
		document.getElementById("name_info").style.display = "none";
		document.getElementById("surename_info").style.display = "none";
		document.getElementById("mobile_info").style.display = "block";
		document.getElementById("pass_info").style.display = "none";

  }



// password input validation

passwordId=document.getElementById("newpassword");
password=passwordId.value;


passwordId.onclick=function(){
	passwordId.classList.remove("back_img");
	document.getElementById("name_info").style.display = "none";
		document.getElementById("surename_info").style.display = "none";
		document.getElementById("mobile_info").style.display = "none";
		document.getElementById("pass_info").style.display = "block";

}










if(checkValue(firstname) ==  false){
	error = error+1;
	firstnameId.classList.add("back_img");
}

if(checkValue(lastname)==false){
	error=error+1;
	lastnameId.classList.add("back_img");
}


if(checkMail(email)==false){
	error=error+1;
	emailId.classList.add("back_img");
}

if (checkpass(password)==false) {
	error=error+1;
	passwordId.classList.add("back_img");
}

if(error == 0){
	return true;
}else{
	return false;
}
}