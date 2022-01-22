var pub = {
	init: function(){
		this.setInclude();
	},
	setInclude: function(){	
		$('.sub-wrap .header').load('/Home/html/_includes/inc_header.html', function(){ ui.setHeader.init() });
		$('.sub-wrap .aside').load('/Home/html/_includes/inc_aside.html', function(){ ui.setAside.init() });
		$('.footer').load('/Home/html/_includes/inc_footer.html', function(){ ui.setFooter.init() });
	},
}
$(function(){
	pub.init();
});
