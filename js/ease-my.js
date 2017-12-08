function startMove(obj,iTarget,attr){//缓动
			
			clearInterval(obj.timer);
			obj.timer=setInterval(function(){
				var iCur=0;
				if (attr=='opacity') {
					iCur=parseInt(parseFloat(getStyle(obj,attr))*100);
				} else {
					iCur=parseInt(getStyle(obj,attr));
				}

				
				var iSpeed=(iTarget-iCur)/5;
				iSpeed=iSpeed>0 ? Math.ceil(iSpeed) : Math.floor(iSpeed) ;

				if (iTarget==iCur) {
					clearInterval(obj.timer);
				} else {
					if (attr=='opacity') {
						iCur += iSpeed;
						obj.style.opacity=iCur/100;
						obj.style.filter='alpha(opacity:'+iCur+');';
					} else {
						obj.style[attr]=iCur+iSpeed+'px';
					}
				}
			}, 50)
		}
		function getStyle(obj,attr){
			if (obj.currentStyle) {
				return obj.currentStyle[attr];
			} else {
				return getComputedStyle(obj, false)[attr];
			}
		}

		