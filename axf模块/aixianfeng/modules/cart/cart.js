define(['text!./cart.html','css!./cart.css'],function(html){
	function render(){
		$("#container").html(html);
	}
	 function gods(){
	 	
	 	var price=0;
		if(localStorage.main11){
			var info=JSON.parse(localStorage.main11);
		}else{
			var info={};
		}
		var str="";
		for(var i in info){
			var eachObj=JSON.parse(info[i]);
			var eachData=JSON.parse(eachObj.data);
			str+='<tr>'+
					'<td class="td1">'+
						'<span></span>'+
					'</td>'+
					'<td class="td2">'+
						'<div style="background:url('+eachData.img+');background-size: 100% 100%;width: .6rem;height: .6rem;"></div>'+
					'</td>'+
					'<td class="td3">'+
						'<div>'+eachData.name+'</div>'+
						'<div>'+
							'<span>￥'+eachData.price+'</span>'+
							'<p>'+
								'<span class="car_less"></span>'+
								'<span class="car_number">&nbsp;'+(eachObj.number)+'&nbsp;</span>'+
								'<span class="car_add"></span>'+
							'</p>'+
						'</div>'+
					'</td>'+
				'</tr>'	;
			
		price+=(eachData.price*eachObj.number);
			
		}
		document.getElementById('cart_table').innerHTML=str;
		document.getElementById('money_total').innerHTML=price;
		$(".car_add").on("click",function(){
				eachObj.number++;
				$(".car_number").html("&nbsp;"+eachObj.number+"&nbsp;");
			});
		$(".car_less").on("click",function(){
			eachObj.number--;
			$(".car_number").html("&nbsp;"+eachObj.number+"&nbsp;");
		});

	 }
	return {
		render:render,
		gods:gods
	}
})
