define([
	'text!./store.html',
	'css!./store.css',
	'md5'
], function(html) {
	function render() {
		$("#container").html(html);

	}
	//头部搜索的跳转实现
	function jump() {
		$(".search img").on("click", function() {
			window.location.href = "html_css/history.html";
		})
	}

	function store_change() {
		var url = "http://www.vrserver.applinzi.com/aixianfeng/apicategory.php?category=";
		ajaxs(url + "热销榜");
		//未点击榜单时，先显示的见状处理
		function ajaxs(url) {
			$.get(url, function(data) {
				if (typeof data == "string") {
					data = JSON.parse(data);
				}
				var html = baidu.template("store_right", data);
				$(".store_ul2").html(html);
				removeStyle();
				cars();
			});
		}
		//点击热销榜时出现的数据
		$(".rxb").on("click", function() {
			ajaxs(url + "天天特价");
		})

		//点击天天特价时出现的数据
		$(".day").on("click", function() {
			ajaxs(url + "天天特价");

		});
		//点击优选水果时出现的数据
		$(".goodfruit").on("click", function() {
			ajaxs(url + "优选水果");
		});
	}
	//初始化购物车的小图标
	if (localStorage.buy_num == undefined) {
		$(".index_car span").hide();
		localStorage.buy_num = 0;
	} else {
		$(".index_car span").text(localStorage.buy_num);
		$(".index_car span").show();
	}
	//购物车
	function cars() {
		if (localStorage.main11 == undefined) {
			main1 = {};
		} else {
			main1 = JSON.parse(localStorage.main11)

		}
		$(".store_ul2>li").on('click', '.positionSpan', function() {
			//购物车小图标的数量
			var buy_num = localStorage.buy_num;
			var buy = parseInt(buy_num);
			buy++;
			localStorage.buy_num = buy;
			$(".index_car span").text(localStorage.buy_num);
			// //将减号和数量显示出来
			var snum = $(this).siblings(".numberSpan");
			// $(this).siblings(".lessSpan,.numberSpan").show();
			//存储数据
			var parent = $(this).closest('li');
			var json = parent.find('textarea').val();
			var id = parent.attr('id');
			var value = localStorage.getItem(id);
			if (value) {
				localStorage.setItem(id, JSON.stringify({
					data: json,
					number: (JSON.parse(value).number) + 1
				}));
				main1[id] = localStorage.getItem(id);
				localStorage.main11 = JSON.stringify(main1);
				snum.html(JSON.parse(value).number + 1);
			} else {
				localStorage.setItem(id, JSON.stringify({
					data: json,
					number: 1
				}));
				main1[id] = localStorage.getItem(id);
				localStorage.main11 = JSON.stringify(main1);
			}
			//动画部分
			var oldimg = parent.children().eq(0);
			var newimg = oldimg.clone();
			newimg.appendTo("body")
			newimg.css({
				"left": oldimg.offset().left + "px",
				"top": oldimg.offset().top + "px",
				"z-index": 10,
				"border-radius": "50%",
				"position": "absolute",
				"width": 1 + "rem",
				"height": 1 + "rem",
				"animation": "fristAnima 3s"
			});
			newimg.animate({
				"left": $(".p3").offset().left + 10 + "px",
				"top": $(".p3").offset().top - 10 + "px",
				"width": .2 + "rem"
			}, 1000, function() {
				newimg.remove();
			})
		})
		$(".store_ul2>li").on('click', '.lessSpan', function() {
			//购物车小图标的数量
			var buy_num = localStorage.buy_num;
			var buy = parseInt(buy_num);
			buy--;
			localStorage.buy_num = buy;
			$(".index_car span").text(localStorage.buy_num);
			var snum = $(this).siblings(".numberSpan");
			var parent = $(this).closest('li');
			var json = parent.find('textarea').val();
			var id = parent.attr('id');
			var value = localStorage.getItem(id);
			if (value) {
				localStorage.setItem(id, JSON.stringify({
					data: json,
					number: (JSON.parse(value).number) - 1
				}));
				main1[id] = localStorage.getItem(id);
				localStorage.main11 = JSON.stringify(main1);
				snum.html(snum.html() - 1);
			}
			if (snum.html() == 0) {
				parent.find(".lessSpan,.numberSpan").hide();
				var zero = JSON.parse(localStorage.main11);
				delete zero[id];
				localStorage.main11 = JSON.stringify(zero);

			}
		});
		// for (var i =0; i<=$(".ask").children().length; i++) {
		//        if(localStorage.main11!=undefined){
		//                    for(var n in JSON.parse(localStorage.main11) ){
		//              			 if($(".ask").children().eq(i).attr("id")==n){
		// 					$(".count0").eq(i).text(JSON.parse(JSON.parse(localStorage.main11)[$(".ask").children().eq(i).attr("id")]).number);
		//         			}
		// 	        }
		//     		}
		// 	}
		//     for (var i =0; i<=$(".ask").children().length; i++){
		//     	     if($(".count0").eq(i).text()=="0"){
		//                   $(".count1").hide();

		//     	     }else{
		//                $(".count1").show();
		//     	     }


		//     }
		for (var i = 0; i <= $(".store_ul2").children().length; i++) {
			if (localStorage.main11 != undefined) {
				for (var n in JSON.parse(localStorage.main11)) {
					if ($(".store_ul2").children().eq(i).attr("id") == n) {
						$(".numberSpan").eq(i).text(JSON.parse(JSON.parse(localStorage.main11)[$(".store_ul2").children().eq(i).attr("id")]).number);
					}
				}
			}
		}
		for (var i = 0; i <= $(".store_ul2").children().length; i++) {
			if ($(".numberSpan").eq(i).text() == "0") {

				$(".lessSpan .numberSpan").hide();

			} else {
				$(".lessSpan .numberSpan").show();
			}
		}

	}
	//去除没有买一赠一的样式
	function removeStyle() {
		$(".lispan2").each(function() {
			if ($(this).html() == "") {
				$(this).hide();
			}
		})
	}
	return {
		render: render,
		store_change: store_change,
		jump: jump

	}
})