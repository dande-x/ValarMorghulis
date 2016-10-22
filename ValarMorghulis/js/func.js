function register() {
	if(!checkRegInput()) {
		return;
	}
	var email = document.getElementById("email").value;
	var password = document.getElementById("password1").value;
	var code = document.getElementById("code").value;
	var data='{"email":"'+email+'","password":"'+password+'","code":"'+code+'"}';
	var result=ajaxJson(data);
	if(result!=false){
		window.location.href="login.html";
	}
}
function login(){
	if(!checkLogInput()){
		return;
	}
	var email=document.getElementById("lemail").value;
	var password=document.getElementById("lpassword").value;
	var data='{"email":"'+email+'","password":"'+password+'"}';
	var result=ajaxJson(data);
	if(result!=false){
		window.location.href="MainChat.html";
	}
}
function ajaxJson(data){
	var request = new XMLHttpRequest();
	request.open("POST", Url);
	console.log(data);
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;application/json; charset=utf-8");
	request.send(data);
	request.onreadystatechange = function() {
		if(request.readyState === 4) {
			if(request.status === 200) {
				cosole.log(request.responseText);
				var data = JSON.parse(request.responseText);
				return data;
			} else {
				alert("网络错误 !");
				return false;
			}
		} else {
			alert("网络错误！");
			return false;
		}
	}
	
}
function checkLogInput() {
	if(document.getElementById("lemail").value==""){
		alert("请检查您输入的邮箱。");
		return false;
	}
	if(document.getElementById("lpassword").value==""){
		alert("请检查您输入的密码。");
		return false;
	}
	return true;
}

function checkRegInput() {
	if(!confirmPassword()) {
		alert("请检查您输入的密码。");
		return false;
	}
	if(!checkEmail()) {
		alert("请检查您输入的邮箱。");
		return false;
	}
	if(document.getElementById("t1").checked) {
		return true;
	} else {
		alert("请同意shoop条款。");
		return false;
	}

}

function checkEmail() {
	//判断邮箱地址是否合法，是否已经存在
	var email = document.getElementById("remail").value;
	//if(emial)
	return true;
}
//判断两次密码输入是否相同
function confirmPassword() {
	var password = document.getElementById("password1").value;
	var confirmpassword = document.getElementById("password2").value;
	if(password.length < 6) {
		document.getElementById("passwordlength").innerHTML = "输入密码长度小于6位！";
		document.getElementById("passwordlength").style.color = "red";
		return false;
	} else {
		document.getElementById("passwordlength").innerHTML = "";
		if(password != "" && confirmpassword != "") {
			if(password != confirmpassword) {
				document.getElementById("alertpassword").innerHTML = "输入密码不一致！";
				document.getElementById("alertpassword").style.color = "red";
				return false;
			} else {
				document.getElementById("alertpassword").innerHTML = "输入密码一致。";
				document.getElementById("alertpassword").style.color = "green";
			}
		}
	}

	return true;
}