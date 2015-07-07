;(function($,window,document,undefined){
	var pluginName='Tab',
	defaults={
		hdClass:'.tab-hd-item',
		bdClass:'.tab-bd-item'
	};
	function Plugin(element,options){
		this.element=element;
		this.options=$.extend({},defaults,options);
		this._defaults=defaults;
		this._name=pluginName;
		this.init();
	}
	Plugin.prototype.init=function(){
		this.$hdItems=$(this.element).find(".tab-hd-item");
		this.$bdItems=$(this.element).find(".tab-bd-item");
		var _this=this;
		this.$hdItems.each(function(index,el){
			var $this=$(this);
			$this.on("click",function(){
				$this.addClass("oncurr").siblings().removeClass("oncurr");
				_this.$bdItems.eq(index).show().siblings().hide();
			})
		});
	}
	$.fn[pluginName]=function(options){
		return this.each(function(){
			if(!$.data(this,'plugin_'+pluginName)){
				return $.data(this,'plugin_'+pluginName,new Plugin(options));
			}
		})
	}

})

$.fn.tab=function(options){
	var defaults={
		hdClass:'.tab_hd_item',
		bdClass:".tab_bd_item"
	};
	var realOptions=$.extend({},defaults,options);
	return this.each(function(index,el){
		var $hdItems=$(this).find(realOptions.hdClass),
		$bdItems=$(this).find(realOptions.bdClass);
		$hdItems.each(function(i,e){
			var $this=this;
			$this.on("click",function(){
				if()
			})
		})
	})
}