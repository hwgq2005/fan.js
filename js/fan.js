/**
 * 
 * @authors H君 (262281610@qq.com)
 * @date    2016-01-17 14:17:50
 * @version 1.0
 */


;(function(window,Fan){

	"use strict";

	var menuBtn,
		wrapper,
		open=false;


	Fan.init=function(elem){
		menuBtn=document.querySelector(elem);
		wrapper=menuBtn.nextElementSibling;
		menuBtn.onclick=Fan.open;
		wrapper.onclick=Fan.stopEvent;
		document.onclick=Fan.close;
	}

	Fan.open=function(e){
		Fan.stopEvent();
		if (!open) {
			menuBtn.innerHTML='-';
			wrapper.className='menu-wrapper open';
		}else{
			menuBtn.innerHTML='+';
			wrapper.className='menu-wrapper';
		};
		open=!open;
	}

	Fan.close=function(){
		open=false;
		menuBtn.innerHTML='+';
		wrapper.className='menu-wrapper';
	}

	Fan.stopEvent=function(e){
		if (!e) var e = window.event;
		if (e.stopPropagation) { 
			// 兼容火狐
			e.stopPropagation(); 
		} 
		else if (e) { 
			// 兼容IE
			window.event.cancelBubble = true; 
		}
	}

	window.Fan = Fan;
	
}(window,window.Fan || {}))
