/**
 * 
 * @authors H君 (262281610@qq.com)
 * @date    2016-01-17 14:17:50
 * @version 1.0
 */


;(function(window,Menu){

	"use strict";

	var menuBtn,
		wrapper,
		open=false;


	Menu.init=function(elem){
		menuBtn=document.querySelector(elem);
		wrapper=menuBtn.nextElementSibling;
		menuBtn.onclick=Menu.open;
		wrapper.onclick=Menu.stopEvent;
		document.onclick=Menu.close;
	}

	Menu.open=function(e){
		Menu.stopEvent();
		if (!open) {
			menuBtn.innerHTML='-';
			wrapper.className='menu-wrapper open';
		}else{
			menuBtn.innerHTML='+';
			wrapper.className='menu-wrapper';
		};
		open=!open;
	}

	Menu.close=function(){
		open=false;
		menuBtn.innerHTML='+';
		wrapper.className='menu-wrapper';
	}

	Menu.stopEvent=function(e){
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

	window.Menu = Menu;
	
}(window,window.Menu || {}))
