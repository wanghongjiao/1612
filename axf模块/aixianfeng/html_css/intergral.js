$(function(){
	$(".back").on("click",function(){
		window.history.back();
	});
	var cv=$("#cavasDomo")[0];
	var cvContext=cv.getContext("2d");
	var cvContext1=cv.getContext("2d");
	var end=1.5*Math.PI;
	cvContext.beginPath();
	var t=setInterval(function(){
		end+=.1*Math.PI;
		cvContext.beginPath();
		cvContext.arc(160,82,68,1.5*Math.PI,end);
		cvContext.strokeStyle = "#ddd";
		cvContext.lineWidth = 18;
		cvContext.stroke();
		cvContext1.beginPath();
		cvContext1.arc(160,82,55,1.5*Math.PI,end);
		cvContext1.strokeStyle = "#c7c7c7";
		cvContext1.lineWidth = 7;
		cvContext1.stroke();
	},100);
	cvContext.font = ".14rem  'Myriad Set Pro'";
	cvContext.fillStyle = "black";
	cvContext.fillText("可用积分", 130, 70);
	cvContext.font = ".2rem  微软雅黑";
	cvContext.fillText("0", 156, 100);
})