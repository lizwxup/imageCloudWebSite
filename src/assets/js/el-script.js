// function myEvent(obj, ev, fu){
// 	obj.attachEvent ? obj.attachEvent('on' + ev, fu) : obj.addEventListener(ev, fu, false);
// }
window.onload = function(){
	console.log("111");

	var oBox = document.getElementById('el-ztbox');
	var oLeft = document.getElementById('el-left');
	var oRight = document.getElementById('el-right');
	var oConter = document.getElementById('el-conter');
	var oUl = oConter.getElementsByTagName('ul')[0];
	var oLi = oConter.getElementsByTagName('li');
	var oScroll = document.getElementById('el-scroll');
	var oSpan = oScroll.getElementsByTagName('span')[0];
	var i = 0;
	oUl.style.width = 1250 +'px';
	//var iWidth = oScroll.offsetWidth/(oUl.offsetWidth / oConter.offsetWidth - 1)
	var iWidth=416;
	oLeft.onmouseover = oRight.onmouseover = function(){
		this.className = 'hover';
		//点击左侧按钮
		oLeft.onclick = function(){
				var butscroll = oSpan.offsetLeft - iWidth;
				oscroll(butscroll);
		};
		//点击右侧按钮
		oRight.onclick = function(){
			var butscroll = oSpan.offsetLeft + iWidth;

			oscroll(butscroll);
		};
	};
	//滚动事件
	function oscroll(l){
		if(l < 0){
			l = 0;
		}else if(l > oScroll.offsetWidth - oSpan.offsetWidth){
			l = oScroll.offsetWidth - oSpan.offsetWidth;
		}
		var scrol = l / (oScroll.offsetWidth - oSpan.offsetWidth);
		sMove(oSpan, 'left', Math.ceil(l));
		sMove(oUl, 'left', '-'+Math.ceil((oUl.offsetWidth - (oConter.offsetWidth + 15)) * scrol));
	}

	function td(l){
		if(l < 0){
			l = 0;
		}else if(l > oScroll.offsetWidth - oSpan.offsetWidth){
			l = oScroll.offsetWidth - oSpan.offsetWidth;
		}
		var scrol = l / (oScroll.offsetWidth - oSpan.offsetWidth);
		oSpan.style.left = l+'px';
		oUl.style.left = '-'+(oUl.offsetWidth - (oConter.offsetWidth + 15)) * scrol +'px';
	}
};
//运动框架
function getStyle(obj, attr){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, false)[attr];
}
function sMove(obj, attr, iT, onEnd){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		dMove(obj, attr, iT, onEnd);
	},30);
}
function dMove(obj, attr, iT, onEnd){
	var iCur = 0;
	attr == 'opacity' ? iCur = parseInt(parseFloat(getStyle(obj, attr)*100)) : iCur = parseInt(getStyle(obj, attr));
	var iS = (iT - iCur) / 5;
	iS = iS > 0 ? Math.ceil(iS) : Math.floor(iS);
	if(iCur == iT){
		clearInterval(obj.timer);
		if(onEnd){
			onEnd();
		}
	}else{
		if(attr == 'opacity'){
			obj.style.ficter = 'alpha(opacity:'+(iCur + iS)+')';
			obj.style.opacity = (iCur + iS) / 100;
		}else{
			obj.style[attr] = iCur + iS +'px';
		}
	}
}
