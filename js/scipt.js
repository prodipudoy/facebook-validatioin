// function checkValue(data){
// 	if (data == "") {
// 		return false;
// 	}else{
// 		return true;
// 	}
// }

function checkValue(data){
	if(data ==""){
		return false;
	}else {
		return true;
	}
}


function validation(){
	firstnameId = document.getElementById("firstname");
	firstname = firstnameId.value;
	error = 0;
	
	firstnameId.onclick = function(){
		firstnameId.classList.remove("back_img");
		document.getElementById("name_12").style.display = "block";
		// document.getElementById("error_2").style.display = "none";
		// document.getElementById("error_4").style.display = "none";
		// document.getElementById("error_3").style.display = "none";
	}
	firstnameId.onchange = function(){
		document.getElementById("name_12").style.display = "none";
	}
	



if(checkValue(firstname)==false){
		error = error+1;
		firstnameId.classList.add("back_img");
	}
	
	if(error == 0){
		return true;
	}else{
		return false;
	}
	
}












// function validation(){
// 	firstnameId = document.getElementById("firstname");
// 	firstname = firstnameId.value;
// 	error = 0;
// 	firstnameId.onclick = function(){
// 		firstnameId.classList.remove("back_img");
// 		document.getElementById("name12").style.display="block";

// 	}



// 	if(checkValue(firstname) == false){
// 		error = error+1;
// 		firstnameId.classList.add("back_img");
// 		document.getElementById("name12").style.display="block";
// 	}
// 	if(error == 0){
// 		return true;
// 	}else{
// 		return false;
// 	}
// }