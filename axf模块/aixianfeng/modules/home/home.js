define(
[
  'text!./home.html',
  'css!./home.css',
  'css!../../js/swiper-3.4.0.min.css',
  '../../js/swiper-3.4.0.min.js'
],
function(html){
  function render(){
    $('#container').html(html);
  }

	function aj_lunbo(){
		/*用百度模板写轮播*/
	  		$.ajax({
		    url: "http://www.vrserver.applinzi.com/aixianfeng/apihome.php",
		    type:"get",
		    success: function(data){
		    data1=JSON.parse(data);	
		    	var html=baidu.template("a",data1);
		    	$(".swiper-wrapper").html(html);
		    	lunbo();
	    }
	 	}); 
			$('#container').html(html);
	}
	     
  //轮播图
  function lunbo(){
  		var mySwiper = new Swiper ('.swiper-container', {
	    direction: 'horizontal',
	    loop: true,
	    autoplay:1000,
	    // 如果需要分页器
	    pagination: '.swiper-pagination',
	    
	    // 如果需要前进后退按钮
	    nextButton: '.swiper-button-next',
	    prevButton: '.swiper-button-prev',
	    
	    // 如果需要滚动条
	    // scrollbar: '.swiper-scrollbar',
	    observer:true,//修改swiper自己或子元素时，自动初始化swiper
    	observeParents:true,//修改swiper的父元素时，自动初始化swiper

	  })        
  }
  //轮播下面的nav小图标部分
  function home_navs(){
  		$.ajax({
		    url: "http://www.vrserver.applinzi.com/aixianfeng/apihome.php",
		    type:"get",
		    success: function(data){
		    data1=JSON.parse(data);	
		    	var html_nav=baidu.template("home_nav",data1);
		    	$(".header_ul1").html(html_nav);
		    	
	    }
	 	}); 
			$('#container').html(html);
  }
  //nav小图标的跳转事件
  function home_skill(){
  	$(".header_ul1").on("click","li:eq(1)",function(){
  			$(this).children("a").attr("href","html_css/secKill.html");
  	});
  	//搜索的跳转页面
  	$(".search a").on("click",function(e){
  		$(this).attr("href","html_css/history.html");
  })
  }

  // 鲜峰热卖
  function home_xfSell(){
  	$('#container').html(html);
  	//ajax请求
  	$.ajax({
		    url: "./json/hot_sale.json",
		    type:"get",
		    success: function(data){
		    	var html1 = baidu.template("home_hotSell",data);
		    	$(".ul2").html(html1);
		    	removeStyle();
	    }
	 }); 
  }
  	
  //去除没有买一赠一的样式
	function removeStyle(){
		$(".delespan").each(function(){
			if($(this).html()==""){
				$(this).hide();
			}
		})
	}

  
  return {
    render:render,
    home_xfSell:home_xfSell,
    aj_lunbo:aj_lunbo,
    home_navs:home_navs,
    home_skill:home_skill
  }

})
