function showMessage(elem) {
	var cls = elem.className;
	var friends = document.getElementsByClassName("friend");
	for(var i = 0; i < friends.length; i++) {
		var cla = friends[i].className;
		friends[i].className = cla.replace(/choose/, " ");
	}
	elem.className += ' choose ';

	delMessages();
	
	//网络请求，获取聊天数据
	
	var data;
	addMessages(data);

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
		if(data[i].sendid=其他人){
			var li=createOtherMessage(data[i]);
			messages.appendChild(li);
		}else{
			var li=createMyMessage(data[i]);
			messages.appendChild(li);
		}
	}
	
} 

function sendMessage(){
	var content =document.getElementById("message-to-send");
	var data=Array;
	data['sendName']="me";
	data['sendTime']="today";
	data['content']=content.value;
	content.value="";
	
	document.getElementById('messagesDiv').scrollTop =document.getElementById('messagesDiv').scrollHeight+100;
	//ajaxJson(data);
	var messages = document.getElementById("messages");
	var message=createMyMessage(data);
	messages.appendChild(message);
}


function createOtherMessage(message) {
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
	return li;
}


function createMyMessage(message){
	var li = document.createElement("li");
	li.className+=" clearfix ";
	var div1=document.createElement("div");
	div1.className+=' message-data align-right ';
	var sname=document.createElement("span");
	sname.className+=' message-data-name ';
	sname.innerHTML=message.sendName;  //发送者姓名
	var sdate=document.createElement("span");
	sdate.className+=' message-data-time ';
	sdate.innerHTML=message.sendTime+"&nbsp&nbsp";
	div1.appendChild(sdate);
	div1.appendChild(sname);
	var div2=document.createElement("div");
	div2.className+=' message other-message float-right ';
	div2.innerHTML=message.content;
	li.appendChild(div1);
	li.appendChild(div2);
	return li;
}
