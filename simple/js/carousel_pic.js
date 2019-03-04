/*原生js实现图片轮播效果
var flash=document.getElementById("flash");
var is=document.getElementsByTagName('img');
var ls=document.getElementsByTagName('li');
var c=0;

setInterval(function (){
    c++;
   if (c==4){  三元表达式： c = c==4?0:c;
       c=0;
   }
   document.title=c;
	//让所有的图片都隐藏
   for (var i=0;i<is.length;i++){
       is[i].style.display='none';
       ls[i].style.background='#DDDDDD';
   }
	//只让C号图片显示 
   is[c].style.display='block';
	//只让C号li变红
   ls[c].style.background='#A10000';
},1000)*/



//jquery实现图片轮播
	var c = 0;
//设置定时器，控制自动轮播
	var timer=setInterval(run,1000);

//定时器调用函数
	function run(){
		c++;
		c = c==4?0:c;
		//让C号图片显示，兄弟元素隐藏——show()换成fadeIn，hide()换成fadeOut实现淡入淡出的效果
		$(".pic").eq(c).fadeIn(300).siblings('.pic').fadeOut(300);
		//让C号li变红，兄弟li变灰
		$("#flash ul li").eq(c).css('background','#A10000').siblings('li').css('background','#DDDDDD');

	};

//鼠标移入停止移出继续事件
	$("#flash").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(run,1000);
	});

//鼠标移入小圆点事件
$("#flash ul li").mouseenter(function(){
	//获取当前li的序号
	c = $(this).index();
	//让C号图片显示，兄弟元素隐藏——show()换成fadeIn，hide()换成fadeOut实现淡入淡出的效果
	$(".pic").eq(c).fadeIn(300).siblings('.pic').fadeOut(300);
	//让C号li变红，兄弟li变灰
	$("#flash ul li").eq(c).css('background','#A10000').siblings('li').css('background','#DDDDDD');
});

//点击箭头左右切换图片
$(".left").click(function(){
	--c;
	if(c<0){
		c=3;
	}
	$(".pic").eq(c).fadeIn(300).siblings('.pic').fadeOut(300);
	$("#flash ul li").eq(c).css('background','#A10000').siblings('li').css('background','#DDDDDD');
});
$('.right').click(function(){
	++c;
	if(c>3){
		c=0;
	}
	$(".pic").eq(c).fadeIn(300).siblings('.pic').fadeOut(300);
	$("#flash ul li").eq(c).css('background','#A10000').siblings('li').css('background','#DDDDDD');
});


