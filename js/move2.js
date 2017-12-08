/**
 * @完美运动框架
 */
function getStyle(obj, attr)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[attr];
	}
	else
	{
		return getComputedStyle(obj, false)[attr];
	}
}

//使用json存入多个属性值
function startMove(obj, json, fn)
{
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		var bStop=true;		//json中的值全部运行完毕:即这一次运动就结束了——所有的值都到达了stop-3.1
		for(var attr in json)
		{
			//1.取当前的值
			var iCur=0;
			
			if(attr=='opacity')
			{
				iCur=parseInt(parseFloat(getStyle(obj, attr))*100);
			}
			else
			{
				iCur=parseInt(getStyle(obj, attr));
			}
			
			//2.算速度
			var iSpeed=(json[attr]-iCur)/8;//iTarget==>改为json[attr],无其它变化,因为每次只执行一个属性值的变化
			iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
			
			//3.检测停止
			if(iCur!=json[attr])//iTarget==>改为json[attr],无其它变化,因为每次只执行一个属性值的变
			{
				bStop=false;//当前值没有到达目标位置,继承运行,即json中尚有未执行的值 stop-3.2
			}
			
			if(attr=='opacity')
			{
				obj.style.filter='alpha(opacity:'+(iCur+iSpeed)+')';
				obj.style.opacity=(iCur+iSpeed)/100;
			}
			else
			{
				obj.style[attr]=iCur+iSpeed+'px';
			}
		}
		
		if(bStop)//所有json中的值都执行完毕,停止 stop-3.3
		{
			clearInterval(obj.timer);
			
			if(fn)
			{
				fn();
			}
		}
	}, 30)
}