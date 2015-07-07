(function(root,factory){
	if(typeof define==='function'&&define.amd){
		define(['$'],factory);
	}else if(typeof exports==='object'){
		module.exports=factory();
	}else{
		root.ImageZooming=factory(window.Zepto||winodw.jQuery||$);
	}
})(this,factory($){
	$.fn.ImageZooming=function(settings){
		var arr=[];
		$(this).each(function(){
			var options=$.extend({
				target:$(this)
			},settings);
			var lz=new ImageZooming();
			lz.init(options);
			arr.push(lz);
		})
	};

	function ImageZooming(){
		var rnd=Math.random().toString().replace(".","");
		this.id='imagezooming_'+rnd;
	}

	ImageZooming.prototype={
		init:function(settings){
			this.settings=$.extend({
				target:$(),
				width:100,
				height:100,
				always:false,
				times:2,
				handle:false,
				callback:null

			},settings);
			this.settings.target=$(this.settings.target);
			this.zoom=$('#',this.id);
			this.bindEvent();

		},
		bindEvent:function(){
			var _this=this;
			if(this.settings.always){
				_this.createZooming.call(_this,this.settings.target);
				var img=this.settings.target;
				var offset=$(img).offset(),
				imgh=$(img).height(),
				imgw=$(img).width();
				_this.setPosition.call(_this,imgw/2+offset.left,imgh/2+offset.top,img);
			}
			_this.zoom.on('touchmove',function(event){
				return _this.event['zoommove'].call(this,event,_this);
			})
			var ismove=false;
			_this.zoom.on("mousedown",function(e){
				ismove=true;
			});
			("body").on("mouseup".'#'+_this.id,function(e){
				ismove=false;
				return _this.event['mouseup'].call(_this,e,_this);
			});
			$("body").on("mousemove",'#'+_this.id,function(e){
				return ismove&&_this.event['zoommove'].call(this,e,_this);
			})
		}
	}
})

window._=_||{};
var arr=[],slice=arr.slice;
_.inherit=function(origin,methods){
	if(arguments.length===0 ||arguments.length>2){
		throw error('sss');
	}
	var parent=null;
	var properties=slice.call(arguments);
	if(typeof properties[0]==='function'){
		parent=properties.shift();
		properties=properties[0];
	}
	function klass(){
		if(_.isFunction(this.initialize)){
			this.initialize.apply(this,arguments);
		}
	}

	klass.superclass=parent;
	if(parent){
		var subclass=function(){};
		subclass.prototype=parent.prototype;
		klass.prototype=new subclass();
	}
	var ancestor=klass.superclass&&klass.superclass.prototype;
	for(k in properties){
		var value=prototype[k];
		if(ancestor&&typeof value=='function'){
			var argslist=/^\s*function\s*\(([^\(\)]*?)\)\s?/
		}
	}
}


