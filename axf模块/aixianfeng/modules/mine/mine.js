define(['text!./mine.html','css!./mine.css'],function(html){
	function render(){
		$("#container").html(html);
		
	}
	function jump(){
		//跳到积分页面
		$(".jifen_store").on("click",function(){
			$(".jifena").attr("href","html_css/integral.html")
		});
		//跳到我的订单
		$(".myorder").on("click",function(){
			$(this).attr("href","html_css/haveOrder.html");
		})
	}
	return{
		render:render,
		jump:jump
	} 
	

})