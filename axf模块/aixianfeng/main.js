//启动函数 声明一些变量
require.config({
  paths:{
    'jquery':'lib/jquery',
    'backbone':'lib/backbone',
    'css':'lib/css',
    'text':'lib/text',
    'md5':'lib/md5',
    'underscore':'lib/underscore'
  }
  
});


require([
  'jquery','backbone','./router.js'
],
function($,backbone){
	  Backbone.history.start();
	  readhash(location.hash);
	  //点击切换footer图标
	  $("footer a").on("click", function(){
	  var target = $(this).find(".footer_p").html();
	  switch(target){
	    case "首页" :
	      $("footer a").find(".p_img").eq(0).css("background-image","url(footer_img/home1.png)");
	      $("footer a").find(".p_img").eq(1).css("background-image","url(footer_img/shan.png)");
	      $("footer a").find(".p_img").eq(2).css("background-image","url(footer_img/yuding.png)");
	      $("footer a").find(".p_img").eq(3).css("background-image","url(footer_img/che.png)");
	      $("footer a").find(".p_img").eq(4).css("background-image","url(footer_img/mine.png)");
	      ;break;
	    case "闪送超市" :
	      $("footer a").find(".p_img").eq(0).css("background-image","url(footer_img/home.png)");
	      $("footer a").find(".p_img").eq(1).css("background-image","url(footer_img/shan1.png)");
	      $("footer a").find(".p_img").eq(2).css("background-image","url(footer_img/yuding.png)");
	      $("footer a").find(".p_img").eq(3).css("background-image","url(footer_img/che.png)");
	      $("footer a").find(".p_img").eq(4).css("background-image","url(footer_img/mine.png)");
	      ;break;
	    case "新鲜预定" :
	       $("footer a").find(".p_img").eq(0).css("background-image","url(footer_img/home.png)");
	      $("footer a").find(".p_img").eq(1).css("background-image","url(footer_img/shan.png)");
	      $("footer a").find(".p_img").eq(2).css("background-image","url(footer_img/yuding1.jpg)");
	      $("footer a").find(".p_img").eq(3).css("background-image","url(footer_img/che.png)");
	      $("footer a").find(".p_img").eq(4).css("background-image","url(footer_img/mine.png)");
	      ;break;
	    case "购物车" :
	       $("footer a").find(".p_img").eq(0).css("background-image","url(footer_img/home.png)");
	      $("footer a").find(".p_img").eq(1).css("background-image","url(footer_img/shan.png)");
	      $("footer a").find(".p_img").eq(2).css("background-image","url(footer_img/yuding.png)");
	      $("footer a").find(".p_img").eq(3).css("background-image","url(footer_img/che1.png)");
	      $("footer a").find(".p_img").eq(4).css("background-image","url(footer_img/mine.png)");
	      ;break;
	    case "我的" :
	      $("footer a").find(".p_img").eq(0).css("background-image","url(footer_img/home.png)");
	      $("footer a").find(".p_img").eq(1).css("background-image","url(footer_img/shan.png)");
	      $("footer a").find(".p_img").eq(2).css("background-image","url(footer_img/yuding.png)");
	      $("footer a").find(".p_img").eq(3).css("background-image","url(footer_img/che.png)");
	      $("footer a").find(".p_img").eq(4).css("background-image","url(footer_img/mine1.png)");
	      ;break;
	    };
	 
	})
	  //刷新时脚部的图片颜色不会全部变到首页为黄色
	function readhash(hash){
		var footer_menu=$("footer a").find(".p_img");
		switch (hash){
			case"#home":footer_menu.eq(0).css("background-image","url(footer_img/home1.png)");break;
			case"#store":footer_menu.eq(1).css("background-image","url(footer_img/shan1.png)");break;
			case"#order":footer_menu.eq(2).css("background-image","url(footer_img/yuding1.jpg)");break;
			case"#cart":footer_menu.eq(3).css("background-image","url(footer_img/che1.png)");break;
			case"#mine":footer_menu.eq(4).css("background-image","url(footer_img/mine1.png)");break;
		}
	}
	totalNum();
	function totalNum(){
		if(localStorage.main11){
			var info=JSON.parse(localStorage.main11);
			for(var i in info){
				var eachObj=JSON.parse(info[i]);
				var eachData=JSON.parse(eachObj.data);
				var total;
				total=total+eachData.number;
				$(".car_num").text(total);
			}
		}else{
			$(".car_num").text(0);
		}
	}
})
