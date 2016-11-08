$(function(){
	$.ajax({
		url:"../json/secKill.json",
		type:"get",
		success:function(data){
			//data1=JSON.parse(data);	
		    	var html=baidu.template("secKill_top",data);
		    	$(".main3").html(html); 
		}
	});
	//头部返回上一页
	$("header .lt").on("click",function(){
		window.history.back();
	});
	//刷新页面
	$("header .recover").on("click",function(){
		window.location.reload();
	})
})