function showMessage(elem) {
	var cls = elem.className;
	var friends = document.getElementsByClassName("friend");
	for(var i = 0; i < friends.length; i++) {
		var cla = friends[i].className;
		friends[i].className = cla.replace(/choose/, " ");
	}
	elem.className += ' choose ';

	delMessages();
	addMessages();

}

function delMessages() {
	var messages = document.getElementById("messages");
	while(messages.hasChildNodes()) {
		messages.removeChild(messages.firstChild);
	}

}

function addMessages(data) {
	var messages = document.getElementById("messages");
	for(var i = 0; i < data.length; i++) {

		var li = document.createElement("li");
		var div = document.createElement("div");

	}
} 

function createMyMessage(message) {
	var li = document.createElement("li");
	var div1=document.createElement("div");
	div1.className+=' message-data ';
	var sname=document.createElement("span");
	sname.className+=' message-data-name ';
	sname.innerHTML=message.sendName;  //发送者姓名
	var sdate=document.createElement("span");
	sdate.className+=' message-data-time ';
	sdate.innerHTML=message.sendTime;
	div1.appendChild(sname);
	div1.appendChild(sdate);
	var div2=document.createElement("div");
	div2.className+=' message my-message ';
	div2.innerHTML=message.content;
	li.appendChild(div1);
	li.appendChild(div2);
}


function createOtherMessage(message){
	var li = document.createElement("li");
	li.className+=" clearfix ";
	var div1=document.createElement("div");
	div1.className+=' message-data align-right ';
	var sname=document.createElement("span");
	sname.className+=' message-data-name ';
	sname.innerHTML=message.sendName;  //发送者姓名
	var sdate=document.createElement("span");
	sdate.className+=' message-data-time ';
	sdate.innerHTML=message.sendTime;
	div1.appendChild(sdate);
	div1.appendChild(sname);
	var div2=document.createElement("div");
	div2.className+=' message other-message float-right ';
	div2.innerHTML=message.content;
	li.appendChild(div1);
	li.appendChild(div2);
}
