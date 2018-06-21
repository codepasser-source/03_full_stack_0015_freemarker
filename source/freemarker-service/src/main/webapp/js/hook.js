(function($, undefined) {

	var _hook = {
		handles:undefined,
		// 可在这里添加实例方法
		init : function(opts) {
			$.extend(true, this, opts);
		}
	};

	$.fn.hook = function(opts) {
		$.extend(true, this, _hook);
		this.init(opts);
		alert(this.handles);
		for(var index in this.handles){
			alert(this.handles[index]);
		}
	};

})(jQuery, undefined);
var hook = function(opts) {
	jQuery().hook(opts);
};




