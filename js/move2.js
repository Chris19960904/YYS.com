/**
 * @�����˶����
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

//ʹ��json����������ֵ
function startMove(obj, json, fn)
{
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		var bStop=true;		//json�е�ֵȫ���������:����һ���˶��ͽ����ˡ������е�ֵ��������stop-3.1
		for(var attr in json)
		{
			//1.ȡ��ǰ��ֵ
			var iCur=0;
			
			if(attr=='opacity')
			{
				iCur=parseInt(parseFloat(getStyle(obj, attr))*100);
			}
			else
			{
				iCur=parseInt(getStyle(obj, attr));
			}
			
			//2.���ٶ�
			var iSpeed=(json[attr]-iCur)/8;//iTarget==>��Ϊjson[attr],�������仯,��Ϊÿ��ִֻ��һ������ֵ�ı仯
			iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
			
			//3.���ֹͣ
			if(iCur!=json[attr])//iTarget==>��Ϊjson[attr],�������仯,��Ϊÿ��ִֻ��һ������ֵ�ı�
			{
				bStop=false;//��ǰֵû�е���Ŀ��λ��,�̳�����,��json������δִ�е�ֵ stop-3.2
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
		
		if(bStop)//����json�е�ֵ��ִ�����,ֹͣ stop-3.3
		{
			clearInterval(obj.timer);
			
			if(fn)
			{
				fn();
			}
		}
	}, 30)
}