/*-------------------------------------------------------------------
	분류순서
	- @Variables	: 전역변수
	- @Settings		: 기본설정
	- @Utility		: 유틸기능
	- @Layout		: 레이아웃
	- @Components	: 컴포넌트
	- @Content		: 컨텐츠
	- @Init			: 초기실행
-------------------------------------------------------------------*/
/*-------------------------------------------------------------------
	@Variables
-------------------------------------------------------------------*/
//Elements
var	$window			= null,
	$document		= null,
	$html			= null,
	$body			= null,
	$html_body		= null,
	$wrapper		= null,
	$header			= null,
	$activeFocus	= null,
_;

//Devices
var isIOS			= browser.os == 'ios',
	isANDROID		= browser.os == 'android',
	isMOBILE		= browser.mobile == true,
	isPC			= browser.mobile == false,
_;

//Scrolls
var scrTop			= null,		//스크롤 현재위치
	scrTopStart		= null,		//스크롤 시작위치
	scrTopEnd		= null,		//스크롤 종료위치
	isScrFirst		= null,		//스크롤 처음여부
	isScrLast		= null,		//스크롤 마지막여부
_;


/*---------------------------------------------------------------
	@Settings
---------------------------------------------------------------*/
/* 엘리먼트 설정 */
function setElementInit(){
	$window		= $(window);
	$document	= $(document);
	$html		= $('html');
	$body		= $('body');
	$html_body	= $('html, body');
	$wrapper	= $('.wrapper');
	$header		= $('.header');
	$document.off('focusin.eleEvent click.eleEvent').on('focusin.eleEvent click.eleEvent', function(e){
		$activeFocus = $(e.target);
	})
}

/* 디바이스 설정 */
function setDeviceInit(){
	var cls = 'dv_';
	var browserDevice = function(){ return browser.mobile == true ? 'mobile' : 'pc' }
	var clsBrowser = ''
		+ cls + browser.name
		+ ' ' + cls + browser.name + browser.version
		+ ' ' + cls + browser.os
		+ ' ' + cls + browser.os + Math.floor(browser.osVersion)
		+ ' ' + cls + browserDevice();
	$body.addClass(clsBrowser);
}

/* 상태 설정 */
function setStatusInit(){
	scrTop = scrTopStart = $window.scrollTop(); // 스크롤 현재상태
	setPosition(scrTop); // 스크롤 현재상태 설정
	setScrolled(); // 스크롤 진행상태 설정
	setResized(); // 리사이징 진행상태 설정
}
function setPosition(val){
	//스크롤 처음확인
	if (val == 0){
		isScrFirst = true;
		$body.addClass('is_scrollFirst');
	} else {
		isScrFirst = false;
		$body.removeClass('is_scrollFirst');
	}
	//스크롤 마지막확인
	if (val + $window.outerHeight() == $document.height()){
		isScrLast = true;
		$body.addClass('is_scrollLast');
	} else {
		isScrLast = false;
		$body.removeClass('is_scrollLast');
	}
}
function setScrolled(){
	var scrollEndTime;
	var isScrolled = false;
	var oldScrTop = scrTop;
	$window.off('scroll.customEvent').on('scroll.customEvent', function(){
		var curScrTop = $window.scrollTop();

		//스크롤 방향
		if (oldScrTop > curScrTop){
			$window.trigger('scrollUp');
			$body.addClass('is_scrollUp').removeClass('is_scrollDown');
		} else if (oldScrTop < curScrTop){
			$window.trigger('scrollDown');
			$body.addClass('is_scrollDown').removeClass('is_scrollUp');
		}
		oldScrTop = curScrTop;

		//스크롤 종료
		clearTimeout(scrollEndTime);
		scrollEndTime = setTimeout(function(){
			isScrolled = false;
			scrTop = scrTopEnd = curScrTop;
			$window.trigger('scrollEnd');
		}, 100);

		setPosition(curScrTop);
	});
}
function setResized(){
	//Resized
	var resizeEndTime;
	$window.off('resize.customEvent').on('resize.customEvent', function(){
		clearTimeout(resizeEndTime);
		resizeEndTime = setTimeout(function(){
			$window.trigger('resizeEnd');
		}, 100);
	});
}

/*---------------------------------------------------------------
	@Utility
---------------------------------------------------------------*/
/* 이름 */
function getName(){
	// 설명
}

/*---------------------------------------------------------------
	@Layout
---------------------------------------------------------------*/
/* 이름 */
function nameInit(){
	// 설명
}

/*---------------------------------------------------------------
	@Components
---------------------------------------------------------------*/
/* 이름 */
function nameInit(){
	// 설명
}

/*---------------------------------------------------------------
	@Content
---------------------------------------------------------------*/
/* 이름 */
function nameInit(){
	// 설명
}

/*---------------------------------------------------------------
	@Init
---------------------------------------------------------------*/
/* Setting */
function set_init(){
	setElementInit(); // 엘리먼트 설정
	setDeviceInit(); // 디바이스 설정
	setStatusInit(); // 상태 설정
}

/* UI */
function ui_init(){
}

/* Ready */
$(function(){
	set_init();
	ui_init();
});
