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
		var oSmallUl=document.getElementsByClassName("banner_wrap")[0];
		var oSmallLi=oSmallUl.getElementsByTagName("a");
		var iNow=0;//鼠标经过当前的小图
		var timer2=null;
		oSmallUl.style.width = oSmallLi.length*oSmallLi[0].offsetWidth+'px';
		autoPlay();
		function autoPlay(){
			clearInterval(timer2);
			timer2=setInterval(function(){
					iNow++;
					if(iNow==oSmallLi.length){
						iNow=0;
					}
					tab();
					$(".banner_nav a:eq("+iNow+")").addClass("on");
					$(".banner_nav a:eq("+iNow+")").siblings().removeClass("on");
				},2000);}
		function tab(){
			
			for (var j = 0; j < oSmallLi.length; j++) {
				if (iNow==0){
					startMove(oSmallUl,0,'left');
				}else if (iNow==oSmallLi.length-1) {
					startMove(oSmallUl,-(iNow)*oSmallLi[0].offsetWidth,'left');
				}else{
					startMove(oSmallUl,-(iNow)*oSmallLi[0].offsetWidth,'left');
				}
			}
		}
		$(".shishen").click(function(){
			$(".shishen_container").addClass("show");
			$(".shishen_container").css('display','block');
			$(".zhujue_container").removeClass("show");
			$(".zhujue_container").css('display','none');
			$(this).addClass("active");
			$(".zhujue").removeClass("active");
		})
		$(".zhujue").click(function(){
			$(".shishen_container").removeClass("show");
			$(".shishen_container").css('display','none')
			$(".zhujue_container").addClass("show");
			$(".zhujue_container").css('display','block');
			$(this).addClass("active");
			$(".shishen").removeClass("active");
		})
		$(".shishenlist_container .next").click(function(){
			var picWidth=$(".shishen_wrap .tempWrap").width();
			var left = $('.shishen_list').position().left;
			$(".shishen_list").stop().animate({"left":"-"+left+picWidth+"px"},500);
			$(".shishenlist_container .prev").css("display","block");
			$(".shishenlist_container .next").css("display","none");
		})
		$(".shishenlist_container .prev").click(function(){
			var picWidth=$(".shishen_wrap .tempWrap").width();
			var left = $('.shishen_list').position().left;
			$(".shishen_list").stop().animate({"left":left+picWidth+"px"},500);
				$(".shishenlist_container .prev").css("display","none");
			$(".shishenlist_container .next").css("display","block");
		})
		$(".zhujue_tabs .zhujue_tab").click(function(){
			var index=$(this).index();
			$(this).addClass("cur").siblings().removeClass("cur");
			$(".zhujue_wrap").eq(index).addClass('show').siblings().removeClass('show');
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
		var oStrategy=document.getElementsByClassName("strategy_banner_wrap")[0];
		var oStrategyA=oStrategy.getElementsByTagName("a");
		var iNow2=0;//鼠标经过当前的小图
		var timer3=null;
		oStrategy.style.width = oStrategyA.length*oStrategyA[0].offsetWidth+'px';
		autoPlay2();
		function autoPlay2(){
			clearInterval(timer3);
			timer3=setInterval(function(){
					iNow2++;
					if(iNow2==oStrategyA.length){
						iNow2=0;
					}
					tab2();
					$(".strategy_banner_nav a:eq("+iNow2+")").addClass("on");
					$(".strategy_banner_nav a:eq("+iNow2+")").siblings().removeClass("on");
				},2000);}
		function tab2(){
			
			for (var j = 0; j < oStrategyA.length; j++) {
				if (iNow2==0){
					startMove(oStrategy,0,'left');
				}else if (iNow2==oStrategyA.length-1) {
					startMove(oStrategy,-(iNow2)*oStrategyA[0].offsetWidth,'left');
				}else{
					startMove(oStrategy,-(iNow2)*oStrategyA[0].offsetWidth,'left');
				}
			}
		}
		$(".com_tabs .tab_item").hover(function(){
			$(this).addClass("active");
			$(this).siblings().removeClass("active");
			var i=$(this).index();
			$(".strategy_list").stop().animate({"left":'-'+i*$(".right_strategy_part .tempWrap").width()/2+'px'},500);
		})
		$(".tongren_tabs li").hover(function(){
			$(this).children().addClass("on");
			$(this).siblings().children().removeClass("on");
			var i=$(this).index();
			$(".tongren_pics_wrap").stop().animate({"left":'-'+i*$(".tongren_section .tempWrap").width()+'px'},500);
		})
		$(".back_top").click(function(){
			  	var y=$(document).scrollTop();
			  	var timer=null;
			  	
			  	timer=setInterval(function(){
			  		y=y-y*0.7;
			  		if (y<1) {
			  			$(document).scrollTop(0);
			  			clearInterval(timer);
			  		}$(document).scrollTop(y);
			  		
			  	},40);

			  })
})