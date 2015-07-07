(function(){
	var TOUCHSTART,TOUCHEND;
	if(typeof(window.ontouchstart)!=='undefined'){
		TOUCHSTART="touchstart";
		TOUCHEND="touchend";
	}else if(typeof window.onmspointerdown!=='undefined'){
		TOUCHSTART="MSPointerDown";
		TOUCHEND="MSPointerUp";
	}else{
		TOUCHSTART="mousedown";
		TOUCHEND="mouseup";

	}

	function NodeFacade(node){
		thos._node=node;
	}

	NodeFacade.prototype.getDomNode=function(){
		return this._node;
	}
	NodeFacade.prototype.on=function(evt,callback,scope){
		var scopeObj;
		if(!scope){
			scopeObj=this._node;
		}else{
			scopeObj=scope;
		}
		if(evt=='tap'){
			this._node.addEventListener(TOUCHSTART,function(){
				callback.apply(scope,arguments);
			})
		}else if(evt=='tabend'){
			this._node.addEventListener(TOUCHEND,function(){
				callback.apply(scope,arguments);
			})
		}
		return this;
	}
	window.$=function(selector){
		var node=document.querySelector(selector);
		if(node){
			return new NodeFacade(node);
		}
		return null;
	}
})()

var requestFrame=(function(){
	var thisFunc,prefixList=['webkit','moz','ms'];
	for(var i=0,len=prefixList.length;i<len;i++){
		thisFunc=prefixList[i]+"ReqeustAnimationFrame";
		if(window[thisfunc]){
			return function(callback){
				window[thisFunc](callback);
			}
		}
	}
	return function(callback){
		window.setTimeout(callback,1000/60);
	}
})();

(function(){
	var destination=500,start=0;
	var ball=document.getElementById("ball");
	function move(element){
		start=start+10;
		element.style.top=start+"px";
		if(start<destination){
			requestFrame(function(){
				move(element);
			})
		}
	}
	move(ball);
})();