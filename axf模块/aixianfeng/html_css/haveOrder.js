$(function(){
	//点击返回上一页面
	$("img.lt").on("click",function(){
		window.history.back();
	});
	//点击重新刷新页面
	$(".recover").on("click",function(){
		window.location.reload();
	});

})