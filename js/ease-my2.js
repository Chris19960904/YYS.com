/*
名称: 缓动运动--更新
作者: 1703
创建日期: 2017.10.17
修改日期: 
版本号:ver1.10
所属项目:
备注: 
1.能实现的CSS属性: opacity,height,width,font-size,border-width等数值型的CSS样式
2.各种定位的: top,left,right,bottom
*/

	function getStyle(obj,attr){//1.获取css内嵌样式中某个属性的值
		if(obj.currentStyle){//IE
			return obj.currentStyle[attr];
		}else{
			return getComputedStyle(obj,false)[attr];
		}
	}


//obj:元素名称, attr:属性, iTarget:目的地, fn:回调函数
	function startMove(obj,json,fn){//2.缓动框架		
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			var bStop=true; //判断json中所有的值有没有运行完毕,true:已全部运行完毕,false:为未运行完毕
			for(var attr in json){
				var iCur=0;
				if(attr=="opacity"){
					iCur=parseInt(parseFloat(getStyle(obj,attr))*100);//原有的alpha
				}else{
					iCur=parseInt(getStyle(obj,attr));
				}

				//json[attr]即原来的iTarget
				var iSpeed=(json[attr]-iCur)/8;
				iSpeed=iSpeed>0 ? Math.ceil(iSpeed) : Math.floor(iSpeed) ;//1.速度

				if(json[attr]!=iCur){//2.判断是否到达目的地
					bStop=false;//json中的元素还没有全部执行完毕
				}

				if(attr=="opacity"){
					iCur += iSpeed;
					obj.style.opacity=iCur/100;
					obj.style.filter='alpha(opacity:'+iCur+')';
				}else{
					obj.style[attr]=iCur+iSpeed+"px";
				}
				console.log("in="+bStop);
			}

			if(bStop){//当json中所有元素全部执行后.
				clearInterval(obj.timer);
				if(fn) fn(); //停止后,执行回调函数.
			}
			console.log("out="+bStop);
		},40);
	}