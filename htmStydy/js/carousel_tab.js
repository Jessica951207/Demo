//jquery实现图片轮播
	var c = 0;
//设置定时器，控制自动轮播
	var timer=setInterval(run,1500);

//定时器调用函数
	function run(){
		c++;
		c = c==4?0:c;
		//让C号图片显示，兄弟元素隐藏——show()换成fadeIn，hide()换成fadeOut实现淡入淡出的效果
		$(".pic").eq(c).fadeIn(500).siblings('.pic').fadeOut(500);
		//让C号li变红，兄弟li变灰
		$("#flash ul li").eq(c).css('background','#A10000').siblings('li').css('background','#DDDDDD');

	};

//鼠标移入停止移出继续事件
	$("#flash").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(run,1500);
	});

//鼠标移入小圆点事件
$("#flash ul li").click(function(){
	//获取当前li的序号
	c = $(this).index();
	//让C号图片显示，兄弟元素隐藏——show()换成fadeIn，hide()换成fadeOut实现淡入淡出的效果
	$(".pic").eq(c).fadeIn(500).siblings('.pic').fadeOut(500);
	//让C号li变红，兄弟li变灰
	$("#flash ul li").eq(c).css('background','#A10000').siblings('li').css('background','#DDDDDD');
});