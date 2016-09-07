/**
 * 
 * @authors H君 (262281610@qq.com)
 * @date    2016-01-17 14:17:50
 * @version 1.0
 */

;(function(window,Fan){

	"use strict";

	var Fan=function(element){

		this.isopen  = false;
		this.menuBtn = document.querySelector(element);
		this.wrapper = this.menuBtn.nextElementSibling;

		// 初始化
		this.init(this.menuBtn,this.wrapper);

	}

	Fan.prototype.init=function(menuBtn,wrapper){

		var _self=this;
		menuBtn.onclick=function(event){
			_self.open.call(_self,event);
		}
		document.onclick=function(){
			_self.close.call(_self,event);
		}
		wrapper.onclick=stopEvent;

	}

	Fan.prototype.open=function(e){

		var _self=this;
		stopEvent(e);
		if (!_self.isopen) {
			_self.menuBtn.innerHTML='-';
			//判断是否支持这个属性
			if (!_self.wrapper.classList) {
				_self.wrapper.className='menu-wrapper open';
			};
		}else{
			_self.menuBtn.innerHTML='+';
			//判断是否支持这个属性
			if (!_self.wrapper.classList) {
				_self.wrapper.className='menu-wrapper';
			};
		};

		//判断是否支持这个属性
		if (_self.wrapper.classList) {
			_self.wrapper.classList.toggle('open');
		}
		_self.isopen=!_self.isopen;
		
	}

	Fan.prototype.close=function(event){

		var _self=this;
		_self.isopen=false;
		_self.menuBtn.innerHTML='+';
		_self.wrapper.className='menu-wrapper';

	}

	function stopEvent(e){

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
