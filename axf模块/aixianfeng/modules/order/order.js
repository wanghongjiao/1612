define(['text!./order.html','css!./order.css'],function(html){
	function render(){
		$("#container").html(html);
	}
	function order_list(){
		$.ajax({
			url: "http://www.vrserver.applinzi.com/aixianfeng/apiyuding.php",
		    type:"get",
		    success: function(data){
		    	data1=JSON.parse(data);	
		    	var html2= baidu.template("order_order",data1);
		    	$(".order_ul1").html(html2);
		    }
		});

		$("#container").html(html);
	}
	//去除freshDiv里a的默认属性
	function delePrevent(){
		$(".freshDiv1 a,.freshDiv2 a").on("click",function(even){
			even.preventDefault();
		})
	}
	
	return {
		render:render,
		order_list:order_list,
		delePrevent:delePrevent
	}
})