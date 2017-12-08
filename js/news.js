$(function(){
	var onOff=true;
	var iSpeed=-52;
	var timer=null;
	var oUl=document.getElementById("topBar-right");
	var oLi=oUl.getElementsByTagName("a");

	oUl.innerHTML += oUl.innerHTML;//将原有ul增长一倍，实现圆的循环
	oUl.style.height = oLi.length*oLi[0].offsetHeight+'px';

	function fnMove(){
		if (oUl.offsetTop<-oUl.offsetHeight/2) {//向左
			oUl.style.top=0;//8张图片
		}else if (oUl.offsetTop>0) {
			oUl.style.top=-oUl.offsetHeight/2+'px';
		}
			oUl.style.top=oUl.offsetTop+iSpeed+'px';
	}

	timer=setInterval(function(){fnMove();}, 3000);

	$("#topBar-menu span").mouseenter(function(){$("#topBar-menu").addClass("topBar-menu-hover");});
	$("#topBar-menu").mouseleave(function(){$("#topBar-menu").removeClass("topBar-menu-hover");});
	$("#topBar-more-pc").click(function(){
		if (onOff) {
			$("#js-topbar-xiu").css({'left':"276px",'z-index':'4'});
			$(this).addClass("open").html("<<");
			onOff=false;
		}else {
			$("#js-topbar-xiu").css({'left':"135px",'z-index':'3'});
			$(this).removeClass("open").html("更多热门端游");
			onOff=true;
		}
	})
	$("#topBar-more-mobi").click(function(){
		if (onOff) {
			$("#table").addClass("moreAni");
			$(this).addClass("open").html("<<");
			onOff=false;
		}else {
			$("#table").removeClass("moreAni");
			$(this).removeClass("open").html("更多热门手游");
			onOff=true;
		}
	})
	$(".next").click(function(){
		if (onOff) {
			$(".slide").eq(1).addClass("active").css({display : 'block'});
			$(".slide").eq(0).removeClass("active").css({display : 'none'});
			onOff=false;
		} else {
			$(".slide").eq(0).addClass("active").css({display : 'block'});
			$(".slide").eq(1).removeClass("active").css({display : 'none'});
			onOff=true;
		}
		
	})
	$(".gongfang").mouseenter(function(){
		$("#top_bar").addClass("hover");
		$(".topbar_more").addClass("show");
	})
	$("#top_bar").mouseleave(function(){
		$("#top_bar").removeClass("hover");
		$(".topbar_more").removeClass("show");
	});
	$(".topbar_codewrap").eq(0).hover(function(){
		$(".p-tit").eq(0).html("网易阴阳师手游");
	},function(){
		$(".p-tit").eq(0).html("官方微信");
	})
	$(".topbar_codewrap").eq(1).hover(function(){
		$(".p-tit").eq(1).html("网易阴阳师手游");
	},function(){
		$(".p-tit").eq(1).html("官方微博");
	})
	$(document).scroll(function(){
			var y=$(document).scrollTop();
		  	if (y>55) {
		  		$("#top_bar").addClass("fixed");
		  		$(".logo span").addClass("hide");
		  	}else if (y<55) {
		  		$("#top_bar").removeClass("fixed");
		  		$(".logo span").removeClass("hide");
		  	}
		  })
	$(".close_donwloadbar").click(function(){
		$(".nie_download_wrap").addClass("fold");
		$(".fold_wrap").css('display', 'block');
		$("#nie-download").css("display","none");
	})
	$(".fold_wrap a").click(function(){
		$(".nie_download_wrap").removeClass("fold");
		$(".fold_wrap").css('display', 'none');
		$("#nie-download").css("display","block");
	})
	$(".icon2").hover(function(){
		$(".icon2 .icon7_h").slideDown();
	},function(){
		$(".icon2 .icon7_h").slideUp();
	})
	$(".icon6").hover(function(){
		$(".icon6 .icon7_h").slideDown();
	},function(){
		$(".icon6 .icon7_h").slideUp();
	})
	$(".icon8").hover(function(){
		$(".icon8 .icon7_h").slideDown();
	},function(){
		$(".icon8 .icon7_h").slideUp();
	})
	$(".icon7").hover(function(){
		$(".icon7 .icon7_h").slideDown();
	},function(){
		$(".icon7 .icon7_h").slideUp();
	})
	$(".icon12").hover(function(){
		$(".icon12 .icon7_h").slideDown();
	},function(){
		$(".icon12 .icon7_h").slideUp();
	})
	$(".news_tab").hover(function(){
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
		var i=$(this).index();
		$(".news_list").stop().animate({"left":'-'+i*$(".news_list ul").width()+'px'},500);
	})
	$(".banner_nav a").hover(function(){
		$(this).addClass("on");
		$(this).siblings().removeClass("on");
		var i=$(this).index();
		$(".banner_wrap").css({'left':'-'+i*$(".banner_wrap a").width()+'px'});
		clearInterval(timer2);

		setTimeout(function(){
			autoPlay();
		}, 1000);
		
	})
})