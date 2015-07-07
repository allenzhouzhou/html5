E=function(){ 
	function _isEmptyObj(obj){ 
		for(var a  in obj){ 
			return false;
		}
		return true;
	}

	function _each(ary,callback){ 
		for(var i=0,len=ary.length;i<len;i++){ 
			callback(i,ary[i])?i=0:i++;
		}
	}
	function _remove(el,type){ 
		var handler=el.listeners[type]['_handler_'];
		el.removeEvent(type,handler,false);
		el.detachEvent("on"+type,handler);
		delete el.listeners[type];
		if(_isEmptyObj(el.listeners)){ 
			delete el.listeners;
		}

	}
	function add(el,type,fn){ 
		el.listeners=el.listeners||{};
		var listeners=el.listeners[type]= el.listeners[type] || [];
		listeners.push(fn);
		if(!listeners['_handler_']){ 
			listeners['_handler_']=function(e){ 
				var evt=e||window.event;
				for(var i=0,fn;fn=listeners[i++];){ 
					fn.call(el,evt);
				}
			}
			el.addEventListener?el.addEventListener(type,listeners['_handler_'],false);
			el.attachEvent('on'+listeners['_handler_'],fn);

		}
	}
}