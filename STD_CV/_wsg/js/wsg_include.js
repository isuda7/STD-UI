var gRootURL = {
	root : '/STD_CV/',
}
var gBaseURL = {
	_wsg : gRootURL.root+'_wsg/',
	menu1 : gRootURL.root+'html/tutorial/',
	menu2 : gRootURL.root+'html/api/',
	target : '',
}

var include = {
	meta : function(){
		document.write('<title>Standard UI - Standard Guide</title>');
		document.write('<meta http-equiv="X-UA-Compatible" content="IE=edge" />');
		document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />');
		document.write('<link rel="shortcut icon" href="'+gRootURL.root+'favicon.ico" type="image/x-icon" />');
		document.write('<link rel="icon" href="'+gRootURL.root+'favicon.ico" type="image/x-icon" />');
	},
	head : function(){
		document.write('<!-- Guide -->');
		document.write('<link href="'+gBaseURL._wsg+'css/import.css" rel="stylesheet" />');
		document.write('<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons">');
		document.write('<link href="'+gBaseURL._wsg+'codeview/styles/shCoreDefaultWhite.css" rel="stylesheet" />');
		document.write('<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>');
		document.write('<script src="'+gBaseURL._wsg+'js/addon/jquery.mCustomScrollbar.min.js"></script>');
		document.write('<script src="'+gBaseURL._wsg+'js/addon/jquery.clipboard.min.js"></script>');
		document.write('<script src="'+gBaseURL._wsg+'js/wsg_guide.js"></script>');
		document.write('<script src="'+gBaseURL._wsg+'codeview/scripts/shCore.js?cb=undefined"></script>');
		document.write('<script src="'+gBaseURL._wsg+'codeview/scripts/shAutoLoader.js?cb=undefined"></script>');
		document.write('<script src="'+gBaseURL._wsg+'codeview/scripts/shBrushjScript.js?cb=undefined"></script>');
		document.write('<script src="'+gBaseURL._wsg+'codeview/scripts/shBrushXml.js?cb=undefined"></script>');
		document.write('<script src="'+gBaseURL._wsg+'codeview/scripts/shBrushCss.js?cb=undefined"></script>');
		document.write('<script>SyntaxHighlighter.all();</script>');
	},
	header : function(){
		document.write('	<header id="g-header">');
		document.write('		<div class="g-header-inner">');
		document.write('			<h1 class="g-logo"><a href="/">Canvas</a></h1>');
		document.write('			<button type="button" class="g-btn-aside"><span>Menu</span></button>');
		document.write('			<nav class="g-lnb">');
		document.write('				<ul>');
		document.write('					<li><a href="'+gBaseURL.menu1+'index.html" data-aside="g-snbMenu1" data-url="'+gBaseURL.menu1+'">Tutorial</a></li>');
		document.write('					<li><a href="'+gBaseURL.menu2+'index.html" data-aside="g-snbMenu2" data-url="'+gBaseURL.menu2+'">API</a></li>');
		document.write('				</ul>');
		document.write('			</nav>');
		document.write('		</div>');
		document.write('	</header>');
	},
	aside : {
		init : function(){
			this.opneHTML();
			this.menu1();
			this.menu2();
			this.closeHTML();
		},
		opneHTML : function(){
			document.write('	<aside id="g-aside">');
			document.write('		<div class="g-js-scroll g-aside-scroll">');
			document.write('			<nav class="g-snb">');
		},
		closeHTML : function(){
			document.write('			</nav>');
			document.write('		</div>');
			document.write('	</aside>');
		},

		// Tutorial
		menu1 : function(){
			var baseURL = gBaseURL.menu1;
			document.write('				<!-- Checklist -->');
			document.write('				<ul class="g-depth1 g-snbMenu1">');
			document.write('					<li class="g-node1">');
			document.write('						<a href="javascript:;">Tutorial</a>');
			document.write('						<ul class="g-depth2">');
			document.write('							<li class="g-node2"><a href="'+baseURL+'tutorial_01.html">기본사용</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'tutorial_02.html">도형그리기</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'tutorial_03.html">스타일 및 색상 적용하기</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'tutorial_04.html">텍스트 그리기</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'tutorial_05.html">이미지 사용하기</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'tutorial_06.html">변형</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'tutorial_07.html">합성 및 클리핑</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'tutorial_08.html">기본 애니메이션</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'tutorial_09.html">고급 애니메이션</a></li>');
			// document.write('							<li class="g-node2"><a href="'+baseURL+'tutorial_10.html">픽셀 조작</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'tutorial_11.html">Canvas 최적화하기</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'tutorial_12.html">Finale</a></li>');
			document.write('						</ul>');
			document.write('					</li>');
			document.write('				</ul>');
			document.write('				<!-- //Checklist -->');
		},

		// API
		menu2 : function(){
			var baseURL = gBaseURL.menu2;
			document.write('				<!-- Checklist -->');
			document.write('				<ul class="g-depth1 g-snbMenu2">');
			document.write('					<li class="g-node1">');
			document.write('						<a href="javascript:;">API</a>');
			document.write('						<ul class="g-depth2">');
			document.write('							<li class="g-node2"><a href="'+baseURL+'api_01.html">Line</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'api_02.html">Curves</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'api_03.html">Paths</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'api_04.html">Shapes</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'api_05.html">Fill Styles</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'api_06.html">Images</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'api_07.html">Text</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'api_08.html">Transformations</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'api_09.html">Composites</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'api_10.html">Images</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'api_11.html">Animation</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'api_12.html">Mouse Detection</a></li>');
			document.write('						</ul>');
			document.write('					</li>');
			document.write('				</ul>');
			document.write('				<!-- //Checklist -->');
		},
	},
	quick : {
		init : function(){
			// this.opneHTML();
			// this.closeHTML();
		},
		opneHTML : function(){
			document.write('	<div id="g-quick">');
			document.write('		<div class="g-js-scroll g-quick-scroll">');
			document.write('			<nav class="g-qnb">');
		},
		closeHTML : function(){
			document.write('			</nav>');
			document.write('		</div>');
			document.write('	</div>');
		},
	},
	footer : function(){
		document.write('	<a href="#g-wrapper" class="g-top" data-role="spy-scroll">TOP</a>');
		document.write('	<div class="g-mask"></div>');
	},
}