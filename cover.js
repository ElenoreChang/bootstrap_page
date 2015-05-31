window.onload= function(){
	var xmlhttp;
	if (window.XMLHttpRequest){     // code for IE7+, Firefox, Chrome, Opera, Safari
  		xmlhttp=new XMLHttpRequest();
  	}
	else{// code for IE6, IE5
  		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  	}
  	xmlhttp.open("GET","http://zhangxiaohan.me/JSON.txt",true);
  	xmlhttp.send();
	xmlhttp.onreadystatechange=function(){
  		if(xmlhttp.readyState==4){	
  			var jsonResp=xmlhttp.responseText;
    		jsonResp=eval("("+jsonResp+")");
    		alert(jsonResp.user.name+"的爱好是："+jsonResp.user.slogan); 
    	}
  	}  

}
