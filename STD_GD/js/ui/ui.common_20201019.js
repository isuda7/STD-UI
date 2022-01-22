/*-------------------------------------------------------------------
	분류순서
	- @Variables	: 전역변수
	- @Init			: 초기실행
	- @Settings		: 기본설정
	- @Utility		: 유틸기능
	- @Layout		: 레이아웃
	- @Components	: 컴포넌트
	- @Content		: 컨텐츠
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
	$dimmer			= null,
	$activeFocus	= null,
_;

//Devices
var isIOS			= browser.os == 'ios',
	isANDROID		= browser.os == 'android',
	isMOBILE		= browser.mobile == true,
	isPC			= browser.mobile == false,
_;

var ui = {
	/*---------------------------------------------------------------
		@Init
	---------------------------------------------------------------*/
	/* 기본실행 */
	init: function(){
		/* Settings */
		this.setElements();		// 엘리먼트 공통
		this.setDevices();		// 디바이스 확인
		this.setEvents();		// 이벤트 설정

		/* Layout */
		this.aside.init();		// 사이드메뉴

		/* Components */
		this.waveEffect();		// 버튼효과
		this.tab.init();
		this.drop.init();
		this.acco.init();
		this.tooltip.init();
		this.popover.init();
	},
	
	/* 비동기실행 */
	update: function(){
		/* Components */
	},
	
	/*---------------------------------------------------------------
		@Settings
	---------------------------------------------------------------*/
	/* 엘리먼트 설정 */
	setElements: function(){
		$window		= $(window);
		$document	= $(document);
		$html		= $('html');
		$body		= $('body');
		$html_body	= $('html, body');
		$wrapper	= $('.wrapper');
		$header		= $('.header');
		$dimmer		= $('.dimmer');
		$document.off('focusin.eleEvent click.eleEvent').on('focusin.eleEvent click.eleEvent', function(e){
			$activeFocus = $(e.target);
		})
	},

	/* 디바이스설정 - OS, Version, Browser */
	setDevices: function(){
		var cls = 'dv_';
		var browserDevice = function(){ return browser.mobile == true ? 'mobile' : 'pc' }
		var clsBrowser = ''
			+ cls + browser.name
			+ ' ' + cls + browser.name + browser.version
			+ ' ' + cls + browser.os
			+ ' ' + cls + browser.os + Math.floor(browser.osVersion)
			+ ' ' + cls + browserDevice();
		$body.addClass(clsBrowser);
	},

	/* 윈도우 커스텀이벤트설정 - scrollEnd, resizeEnd */
	setEvents: function(){
		var resizeEndTime, scrollEndTime;
		//Scroll
		$window.off('scroll.customEvent').on('scroll.customEvent', function(){
			clearTimeout(scrollEndTime); scrollEndTime = setTimeout(function(){ $window.trigger('scrollEnd') }, 100);
		});
		//Resize
		$window.off('resize.customEvent').on('resize.customEvent', function(){
			clearTimeout(resizeEndTime); resizeEndTime = setTimeout(function(){ $window.trigger('resizeEnd') }, 100);
		});
	},

	/*---------------------------------------------------------------
		@Utility
	---------------------------------------------------------------*/
	/* 웹접근성 - 초점공통 */
	setFocus: {
		eleTags: 'input:not([tabindex]), button:not([tabindex]), a:not([tabindex]), select:not([tabindex]), textarea:not([tabindex])',
		eleTab0: '[tabindex="0"]',
		eleTab1: '[tabindex="-1"]',
		// 포커스 비활성
		disable: function($eleDisable, module){
			$eleDisable.attr({'aria-hidden':'true'}).addClass('is-disable-'+module+'-ariaHidden');
			$eleDisable.find(this.eleTab1).addClass('is-disable-'+module+'-fixed');
			$eleDisable.find(this.eleTags).attr({'tabindex':'-1'}).addClass('is-disable-'+module+'-tags');
			$eleDisable.find(this.eleTab0).attr({'tabindex':'-1'}).addClass('is-disable-'+module+'-tabindex');
		},
		// 포커스 활성
		enable: function($eleEnable, module){
			$eleEnable.attr({'aria-hidden':'false'}).removeClass('is-disable-'+module+'-ariaHidden');
			$eleEnable.find('.is-disable-'+module+'-tags').removeClass('is-disable-'+module+'-tags').removeAttr('tabindex');
			$eleEnable.find('.is-disable-'+module+'-tabindex').removeClass('is-disable-'+module+'-tabindex').attr({'tabindex':'0'});
			$eleEnable.find('.is-disable-'+module+'-fixed').removeClass('is-disable-'+module+'-fixed');
		},
	},

	/* 웹접근성 - 스와이프 */
	setSwiper: function($container, mode){
		// 반복실행 제어
		$container.find('.swiper-button-next, .swiper-button-prev').off('keydown.pub').on('keydown.pub', function(e){
			if (e.keyCode == 13) { e.preventDefault(); e.stopPropagation(); }
		});

		// Vaariables
		if (!$container.hasClass('swiper-container')){ $container = $container.find('.swiper-container').eq(0); }
		var $slideActive = $container.find('> .swiper-wrapper > .swiper-slide-active');
		var $slideActiveNot = $slideActive.siblings();
		var $slideVisible = $container.find('> .swiper-wrapper > .swiper-slide-visible');
		var $slideVisibleNot = $slideVisible.siblings();

		// Options
		if (typeof(mode) == 'string'){ $container.data('mode', mode) }

		// 활성화된 스와이프 체크
		if ($container.closest('.swiper-slide-active').length || $container.closest('.swiper-slide').length == 0) {
			// 센터모드
			if ($container.data('mode') == 'centered') {
				ui.setFocus.disable($slideActiveNot, 'swiper');
				ui.setFocus.enable($slideActive, 'swiper');
			}
			// Auto모드
			else if ($container.data('mode') == 'auto') {
				ui.setFocus.disable($slideVisibleNot, 'swiper');
				ui.setFocus.enable($slideVisible, 'swiper');
			}
			// 기본
			else {
				ui.setFocus.disable($slideVisibleNot, 'swiper');
				ui.setFocus.enable($slideVisible, 'swiper');
			}
		}
	},

	/* 스크롤설정 */
	setScroll: {
		clsLockAll : 'is-locked-all',
		clsLockIOS : 'is-locked-ios',
		scrTop : null,
		//스크롤 비활성
		disable : function(){
			if (isIOS){
				this.scrTop = $window.scrollTop();
				$html_body.addClass(this.clsLockIOS);
				$wrapper.css({position: 'relative', top: this.scrTop * (-1)});
			} else {
				$html_body.addClass(this.clsLockAll);
			}
		},
		//스크롤 활성화
		enable : function(){
			if (isIOS){
				$html_body.removeClass(this.clsLockIOS);
				$wrapper.removeAttr('style');
				$window.scrollTop(this.scrTop);
			} else {
				$html_body.removeClass(this.clsLockAll);
			}
		},
	},

	/* 배경설정 */
	dimmer: {
		open: function($obj){
			this.close($('.dimmer.is-active'));
			$obj.addClass('is-active');
		},
		close: function($obj){
			if ($obj.length) { $obj.removeClass('is-active') }
		},
	},

	/*---------------------------------------------------------------
		@Layout
	---------------------------------------------------------------*/
	// Aside
	aside: {
		init: function(){
			this.event();
		},
		event: function(){
			var self = this;
			$document.off('click.asideOpen').on('click.asideOpen', 'button.js_aside_opener', function(e){ self.open($(this).data('id')) });
			$document.off('click.asideClose').on('click.asideClose', 'button.js_aside_closer', function(e){ self.close($(this).data('id')) });
		},
		open: function(id){
			var self = this;
			var $aside = $('#'+id);
			var $opener = $('.js_aside_opener');
			$opener.attr('aria-expanded', 'true');
			$aside.addClass('is-active').attr('aria-hidden', 'false');
			ui.dimmer.open('aside');
		},
		close: function(id){
			var self = this;
			var $aside = $('#'+id);
			var $opener = $('.js_aside_opener');
			$opener.attr('aria-expanded', 'true');
			$aside.removeClass('is-active').attr('aria-hidden', 'true');
			ui.dimmer.close('aside');
		},
	},

	/*---------------------------------------------------------------
		@Mudule
	---------------------------------------------------------------*/
	// 버튼 웨이브효과
	waveEffect: function(){
		var events = null;
		var ele = '.btn';
		$document.off('mousedown.waveEffectEvent touchstart.waveEffectEvent').on('mousedown.waveEffectEvent touchstart.waveEffectEvent', ele, function(e) {
			events = 'mousedown';
			var self = $(this),
				wave = '.effect-wave',
				btnWidth = self.outerWidth();
			if (e.type == 'mousedown'){ var x = e.offsetX, y = e.offsetY }
			if (e.type == 'touchstart'){ var x = e.touches[0].pageX - self.offset().left, y = e.touches[0].pageY - self.offset().top }
			if (self.find(wave).length == 0){
				self.prepend('<span class="effect-wave"></span>');
				$(wave).css({'top': y, 'left': x}).stop().animate({width: btnWidth * 3, height: btnWidth * 3 }, 400, function(){
					$(this).addClass('is-complete');
					if (events == 'mouseup'){
						$(this).stop().animate({opacity: '0'}, 200, function() {
							$(this).remove();
						});
					}
				});
			}
		})
		$document.off('mouseup.waveEffectEvent touchend.waveEffectEvent').on('mouseup.waveEffectEvent touchend.waveEffectEvent', ele, function(e) {
			events = 'mouseup';
			var self = $(this),
				wave = '.effect-wave';
			if (self.find(wave).hasClass('is-complete')){
				$(wave).stop().animate({opacity: '0'}, 200, function() {
					$(this).remove();
				})
			}
		})
		$document.off('click.waveEffectEvent focusin.waveEffectEvent').on('click.waveEffectEvent focusin.waveEffectEvent', function(e) {
			if ($(e.target).is(ele) == false && $('.effect-wave').length){
				$('.effect-wave').stop().animate({opacity: '0'}, 200, function() {
					$(this).remove();
				})
			}
		})
	},

	/* Tab */
	tab: {
		init: function(){
			this.event();
		},
		event: function(){
			var self = this;
			$document.off('click.tabEvent').on('click.tabEvent', '.tab[data-id]', function(e){
				self.select($(this).data('id'));
			});
		},
		select: function(id, callback){
			var $eleTabItem = $('.tab[data-id="'+id+'"]');
			var $eleTabPanel = $('#'+id);
			if ($eleTabItem.length){ $eleTabItem.addClass('is-active').attr('aria-selected','true').siblings().removeClass('is-active').attr('aria-selected','false') }
			if ($eleTabPanel.length){ $eleTabPanel.addClass('is-active').siblings().removeClass('is-active') }
			if (callback){ typeof(callback) == 'function' ? callback() : callback; }
		}
	},

	/* Accordion */
	acco: {
		speed: 200,
		init: function(){
			var self = this;
			self.update();
			self.event();
		},
		update: function(){
			$('.acco').each(function(){
				if ($(this).data('sync') == undefined){ $(this).data({'sync':true}) }
				if ($(this).data('toggle') == undefined){ $(this).data({'toggle':true}) }
			});
		},
		event: function(){
			var self = this;
			$document.off('click.accoEvent').on('click.accoEvent', '.acco-toggle', function(e){
				var id = $(this).data('id');
				var isToggle = $(this).hasClass('is-active') && $(this).closest('.acco').data('toggle');
				isToggle ? self.close(id) : self.open(id);
			});
		},
		reset: function(id, active, callback){
			var $acco = $('#'+id);
			var $accoItem = $acco.find('>.acco-item');
			var $accoBtn = $acco.find('>.acco-item>.acco-title>.acco-toggle');
			var $accoCont = $acco.find('>.acco-item>.acco-cont');
			if (active == 'visible'){
				$accoItem.addClass('is-active');
				$accoBtn.addClass('is-active').attr({'aria-expanded':'true'});
				$accoCont.addClass('is-active').attr({'aria-hidden':'false'}).removeAttr('style');
			}
			if (active == 'hidden'){
				$accoItem.removeClass('is-active');
				$accoBtn.removeClass('is-active').attr({'aria-expanded':'false'});
				$accoCont.removeClass('is-active').attr({'aria-hidden':'true'}).removeAttr('style');
			}
			if (callback){ typeof(callback) == 'function' ? callback() : callback; }
		},
		visible:function(id, callback){ //페이지로드시 노출
			var $accoBtn = $('[data-id='+id+']');
			var $accoCont = $('#'+id);
			var $accoItem = $accoCont.closest('.acco-item');
			var $accoWrap = $accoCont.closest('.acco');
			var $accoItemSiblings = $accoItem.siblings('.is-active');
			$accoItem.addClass('is-active');
			$accoBtn.addClass('is-active').attr({'aria-expanded':'true'});
			$accoCont.addClass('is-active').attr({'aria-hidden':'false'});
			if (callback){ typeof(callback) == 'function' ? callback() : callback; }
			// Syncroize
			if ($accoWrap.data('sync') && $accoItemSiblings.length){
				$accoItemSiblings.removeClass('is-active');
				$accoItemSiblings.find('.acco-title>.acco-toggle').removeClass('is-active').attr({'aria-expanded':'false'});
				$accoItemSiblings.find('.acco-cont').removeClass('is-active').attr({'aria-hidden':'true'});
			}
		},
		open: function(id, callback){
			var self = this;
			var $accoBtn = $('[data-id='+id+']');
			var $accoCont = $('#'+id);
			var $accoItem = $accoCont.closest('.acco-item');
			var $accoWrap = $accoCont.closest('.acco');
			var $accoItemSiblings = $accoItem.siblings('.is-active');
			if (!$accoBtn.is(':disabled')){
				$accoBtn.addClass('is-active').attr({'aria-expanded':'true'});
				$accoItem.addClass('is-active');
				$accoCont.stop().slideDown(self.speed, function(){
					$(this).addClass('is-active').attr({'aria-hidden':'false'});
					if (callback){ typeof(callback) == 'function' ? callback() : callback; }
				});
			}
			// Syncroize
			if ($accoWrap.data('sync') && $accoItemSiblings.length){
				var closeID = $accoItemSiblings.find('>.acco-cont').attr('id');
				self.close(closeID);
			}
		},
		close: function(id, callback){
			console.log(id);
			var self = this;
			var $accoBtn = $('[data-id='+id+']');
			var $accoCont = $('#'+id);
			var $accoItem = $accoCont.closest('.acco-item');
			$accoBtn.attr({'aria-expanded':'false'}).removeClass('is-active');
			$accoItem.removeClass('is-active');
			$accoCont.stop().slideUp(self.speed, function(){
				$(this).removeClass('is-active').attr({'aria-hidden':'true'});
				if (callback){ typeof(callback) == 'function' ? callback() : callback; }
			});
		},
	},

	drop: {
		speed: 100,
		init: function(){
			this.event();
		},
		event: function(){
			var self = this;
			$document.off('click.dropEvent').on('click.dropEvent', 'button.drop-toggle', function(e){
				var id = $(this).data('id');
				$(this).hasClass('is-active') ? self.close(id) : self.open(id);
			});
			$document.off('focusin.dropEvent2 click.dropEvent2').on('focusin.dropEvent2 click.dropEvent2', function(e){
				$('button.drop-toggle.is-active').each(function(){
					var id = $(this).data('id');
					if ($('.drop').has(e.target).length === 0){ self.close(id) }
				})
			});
		},
		open: function(id, callback){
			var self = this;
			var $eleButton = $('[data-id='+id+']');
			var $eleTarget = $('#'+id);
			$('.drop-toggle.is-active').each(function(){ self.close($(this).data('id')) });
			$eleButton.attr({'aria-expanded':'true'}).addClass('is-active');
			$eleTarget.attr({'aria-hidden':'false'}).addClass('is-active');
			$eleTarget.one('animationend', function(){
				if ($(this).hasClass('is-active')){
					if (callback){ typeof(callback) == 'function' ? callback() : callback; }
				}
			})
		},
		close: function(id, callback){
			var self = this;
			var $eleButton = $('[data-id='+id+']');
			var $eleTarget = $('#'+id);
			$eleButton.attr({'aria-expanded':'false'}).removeClass('is-active');
			$eleTarget.attr({'aria-hidden':'true'}).removeClass('is-active');
			$eleTarget.one('animationend', function(){
				if (!$(this).hasClass('is-active')){
					if (callback){ typeof(callback) == 'function' ? callback() : callback; }
				}
			})
		},
	},

	tooltip: {
		init: function(){
			this.event();
		},
		event: function(){
			var self = this;
			$document.off('click.tooltipEvent').on('click.tooltipEvent', 'button.tooltip-open', function(e){
				self.open($(this).data('id'));
			});
			$document.off('focusin.tooltipEvent2 click.tooltipEvent2').on('focusin.tooltipEvent2 click.tooltipEvent2', function(e){
				$('div.tooltip.is-active').each(function(){
					var id = $(this).attr('id');
					if ($('div.tooltip').has(e.target).length === 0 && !$(e.target).hasClass('tooltip-open')){
						self.close(id);
					}
				})
			});
		},
		open: function(id, callback){
			var self = this;
			var $eleOpener = $('button[data-id='+id+']');
			var $eleTooltip = $('#'+id);
			$('div.tooltip.is-active').each(function(){ self.close($(this).attr('id')) });
			$('#'+id).addClass('is-active');
			$eleOpener.addClass('is-active').attr({'aria-expanded':'true'});
			if (callback){ typeof(callback) == 'function' ? callback() : callback; }
		},
		close: function(id, callback){
			var self = this;
			var $eleOpener = $('button[data-id='+id+']');
			var $eleTooltip = $('#'+id);
			$('#'+id).removeClass('is-active');
			$eleOpener.removeClass('is-active').attr({'aria-expanded':'false'});
			if (callback){ typeof(callback) == 'function' ? callback() : callback; }
		},
	},

	popover: {
		init: function(){
			this.event();
		},
		event: function(){
			var self = this;
			$document.off('click.popoverEvent').on('click.popoverEvent', 'button.popover-open', function(e){
				self.open($(this).data('id'));
			});
			$document.off('focusin.popoverEvent2 click.popoverEvent2').on('focusin.popoverEvent2 click.popoverEvent2', function(e){
				$('div.popover.is-active').each(function(){
					var id = $(this).attr('id');
					if ($('div.popover').has(e.target).length === 0 && !$(e.target).is('button[data-id='+id+']')){
						self.close(id);
					}
				})
			});
		},
		open: function(id, callback){
			var self = this;
			var $eleOpener = $('button[data-id='+id+']');
			var $elepopover = $('#'+id);
			$('div.popover.is-active').each(function(){ self.close($(this).attr('id')) });
			$('#'+id).addClass('is-active');
			$eleOpener.addClass('is-active').attr({'aria-expanded':'true'});
			if (callback){ typeof(callback) == 'function' ? callback() : callback; }
		},
		close: function(id, callback){
			var self = this;
			var $eleOpener = $('button[data-id='+id+']');
			var $elepopover = $('#'+id);
			$('#'+id).removeClass('is-active');
			$eleOpener.removeClass('is-active').attr({'aria-expanded':'false'});
			if (callback){ typeof(callback) == 'function' ? callback() : callback; }
		},
	},

	/* 팝업 */
	popup: {
		$popArr: [],
		zIndexUnit: 1000,
		open: function(id, callback){
			var self = this;
			var $popWrap = $('#'+id);
			var $focus = $popWrap.find('.popup');
			$popWrap.data('opener', $activeFocus).addClass('is-active');
			$popWrap.one('transitionend', function(){
				if ($(this).hasClass('is-active')){
					ui.update();
					$focus.attr('tabindex','0').focus();
					if (callback){ typeof(callback) == 'function' ? callback() : callback; }
				}
			});
			if ($popWrap.find('.dimmer').length) { ui.dimmer.open($popWrap.find('.dimmer')) }
			
			//접근성초점
			ui.setFocus.disable($popWrap.siblings(), 'popup');
			ui.setFocus.disable($popWrap.parents().siblings(), 'popup');
			ui.setFocus.enable($popWrap, 'popup');
			
			//다중팝업설정
			self.$popArr.push($popWrap);
			var zIndex = self.zIndexUnit + self.$popArr.length;
			$popWrap.css({'z-index':zIndex});
		},
		close: function(id, callback){
			var self = this;
			var $popWrap = $('#'+id);
			var $focus = $popWrap.data('opener');
			var $activePopWrap = null;
			$popWrap.removeClass('is-dimmer is-active').removeAttr('style');
			$popWrap.one('transitionend', function(){
				if (!$(this).hasClass('is-active')){
					//닫힌팜업 비활성화
					ui.setFocus.disable($popWrap, 'popup');
					$focus.attr('tabindex','0').focus();
					if (callback){ typeof(callback) == 'function' ? callback() : callback; }
				}
			});
			if ($popWrap.find('.dimmer').length) { ui.dimmer.close($popWrap.find('.dimmer')) }
			
			//다중팝업 설정
			self.$popArr.pop();
			$activePopWrap = self.$popArr[self.$popArr.length - 1];
			
			//마지막 팝업이 기본팝업인 경우
			if (self.$popArr.length){
				//접근성초점 - 마지막팝업 활성화
				ui.setFocus.enable($activePopWrap, 'popup');
				if ($activePopWrap.find('.dimmer').length) { ui.dimmer.open($activePopWrap.find('.dimmer')) }
			} else {
				//접근성초점 - 팝업제외 활성화
				ui.setFocus.enable($popWrap.siblings(), 'popup');
				ui.setFocus.enable($popWrap.parents().siblings(), 'popup');
			} 			
		},
	},

	/* Spy Scroll */
	spyScroll: {
		init: function(){
			this.event();
		},
		event: function(){
			var self = this;
			$document.off('click.spyscrollEvent').on('click.spyscrollEvent', '.js-spyscroll', function(e){
				self.action($(this).data('id'), $(this).data('scroll-target'), $(this).data('scroll-gap'));
			});
		},
		action: function(id, scroller, gap){
			var isBody = scroller == 'body',
				ele_t = $('#'+id).offset().top,
				gap_t = $header.outerHeight() + parseInt(gap),
				sum_t = null;
								
			if (isBody){
				//최종위치 = 대상요소TOP - 공백
				sum_t = ele_t - gap_t;
			} else {
				//최종위치 = 대상요소TOP - 공백 - 스크롤요소TOP + 스크롤TOP
				sum_t = ele_t - gap_t - $(scroller).offset().top + $(scroller).scrollTop();
			}
			
			$(scroller).stop().animate({'scrollTop': sum_t}, 400);
		},
	},

	/* 스와이프 */
	swipes: {
		init: function(){
			this.tab();
		},
		validate: function($container, title, options, func){
			var $swiper = $container.parent();
			var $navDisabled = $swiper.children('.swiper-button-disabled');
			if (title == undefined){ title = '' }
			var defaultOptions = {
				watchSlidesVisibility: true,
				a11y: {
					prevSlideMessage: title+ ' 이전 슬라이드',
					nextSlideMessage: title+ ' 다음 슬라이드',
					firstSlideMessage: title+ ' 첫번째 슬라이드',
					lastSlideMessage: title+ ' 마지막 슬라이드',
				},
				on: {
					init: function(){
						ui.setSwiper($container, 'swiper');
					},
					slideChangeTransitionStart: function(){
						ui.setSwiper($container, 'swiper');
					}
				}
			}
			$.extend(defaultOptions, options); // 기본옵션 머지하기
			//몇개부터 스와이프 설정할지 체크
			if ($container.find('>.swiper-wrapper>.swiper-slide:visible').length > 1){ // 보이는 슬라이드가 1개 초과일때
				func(defaultOptions); // 스와이프 호출(옵션보내기)
				$swiper.removeClass('no_swiper').addClass('is-swiper'); // 스와이프 적용클래스
				if (defaultOptions.autoplay != undefined && defaultOptions.autoplay != false){ $swiper.addClass('is-started').removeClass('is-stoped') } // 자동재생인 경우 재생상태 적용
				if ($navDisabled.length == 2){ $navDisabled.addClass('dis-n') } // 양쪽 disabled 인경우 숨김
				else if ($navDisabled.length){ $navDisabled.removeClass('dis-n') } // 한쪽 disabled 인경우 초기화
			} else {
				$swiper.removeClass('is-swiper').addClass('no_swiper');
			}
		},
		tab: function(){
			var title = '네비게이션';
			var $swiper = $('.tab-nav');
			var $container = $swiper.find('>.swiper-container');
			var options = {
				centeredSlides: true,
				centeredSlidesBounds: true,
				slidesPerView: 'auto',
				slideToClickedSlide:true,
				navigation: {
					nextEl: $swiper.children('.swiper-button-next'), //다음 슬라이드
					prevEl: $swiper.children('.swiper-button-prev'), //이번 슬라이드
				},
				pagination: {
					el: $swiper.children('.swiper-pagination'),
					type: 'bullets',
					renderBullet: function (index, className) {
						return '<span class="' + className + '">' + (index + 1) + '번 슬라이드</span>';
					}
				},
			}
			var func = function(options){
				ui.tabSwiper = new Swiper($container, options);
			}
			ui.swipes.validate($container, title, options, func);
		}
	},

	/*---------------------------------------------------------------
		@Content
	---------------------------------------------------------------*/
	// 이름
	object: {},
}
$(function(){
	ui.init();
	ui.update();
});
