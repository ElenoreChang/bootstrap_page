window.onload= function(){
	//获取XMLHttpRequest对象
	var xmlhttp;
	if (window.XMLHttpRequest){     // code for IE7+, Firefox, Chrome, Opera, Safari
  		xmlhttp=new XMLHttpRequest();
  	}
	else{// code for IE6, IE5
  		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  	}
  	//加载JSON.txt
  	xmlhttp.open("GET","http://zhangxiaohan.me/JSON.txt",true);
  	xmlhttp.send();
	xmlhttp.onreadystatechange=function(){
  		if(xmlhttp.readyState==4){	
  			var jsonResp=xmlhttp.responseText;
    		jsonResp=eval("("+jsonResp+")");
    		//alert(jsonResp.user.name+"的爱好是："+jsonResp.user.slogan); 
    		updateview(jsonResp);
    	}
  	}  
}
//getElementsByClass()方法
function getElementsByClass(searchClass,node,tag) {
	var classElements = new Array();
	if ( node == null ){
		node = document;
	}
	if ( tag == null ){
		tag = '*';
	}
	var els = node.getElementsByTagName(tag);
	var elsLen = els.length;
	var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
	for (i = 0, j = 0; i < elsLen; i++) {
		if ( pattern.test(els[i].className) ) {
			classElements[j] = els[i];
			j++;
		}
	}
	return classElements;
}
//根据返回数据改变外观
var updateview=function(dataJson){
	var Ohead=getElementsByClass("masthead-brand")[0];
	Ohead.innerHTML=dataJson.user.name;
	//设置底部图标、链接及列表id
	var Ofoot=getElementsByClass("mastfoot")[0];
	var Alink=Ofoot.getElementsByTagName("a");
	var Aicon=Ofoot.getElementsByTagName("img");
	for(var i=0;i<dataJson.user.social_media.length;i++){
		var index=i;
		Alink[index].parentNode.id=dataJson.user.social_media[i].name;
		Alink[index].href=dataJson.user.social_media[i].href;
	}
	for(var i=0;i<dataJson.user.social_media.length;i++){
		var index=i;
		Aicon[index].src=dataJson.user.social_media[i].icon_url;
	}
}
