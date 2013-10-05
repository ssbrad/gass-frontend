/*global $:false, jQuery:false, requirejs:false */

requirejs([
	'jquery',
	'domReady',
	'debounce',
	'foundation',
	'topbar',
	'caroufredsel',
	'jqueryeasing',
	'equalize',
	'midway',

	'devtools/helpers.foundation'

],	function ($, domReady) {

	'use strict';

	/*
	|--------------------------------------------------------------------------
	|
	| GLOBALS
	|
	|--------------------------------------------------------------------------
	*/

//|------------------------------------------------------------------------------------------------------------------------------


	(function ($) {
		$.fn.removeStyles = function (c) {
			$(this).removeAttr('style', c);
		};
	}(jQuery));

//|------------------------------------------------------------------------------------------------------------------------------


//|------------------------------------------------------------------------------------------------------------------------------

	function viewH(bar)
	{
		var h = $(window).height();
		return h;
	}

	function viewW(bar)
	{
		var w = $(window).width();
		return w;
	}

	function fitH(x)
	{
		var w = viewH();
		$(x).height(w);
	}

	function fitW(x)
	{
		var w = viewW();
		$(x).width(w);
	}

	function scaleW(w, h, x)
	{
		var y;
		y = Math.ceil((w * x) / h);
		return y;
	}

	function scaleH(w, h, x)
	{
		var y;
		y = Math.ceil((h * x) / w);
		return y;
	}

	function remAttr(x)
	{
		x.removeAttr('style');
	}

	function intend(x, f)
	{
		var timeoutId;
		$(x).hover(function () {
			if (!timeoutId) {
				timeoutId = window.setTimeout(function () {
					timeoutId = null;
					f();
				}, 500);
			}
		},
		function () {
			if (timeoutId) {
				window.clearTimeout(timeoutId);
				timeoutId = null;
			} else {
				// DO NOTHING
			}
		});

	}


	/*
	| PREVENT HASH ON CLICK
	|-----------------------*/
	$(function () {
		$('a.pd').click(function (event) {
			event.preventDefault();
		});
	});




	/*
	|--------------------------------------------------------------------------
	|
	| DOC READY
	|
	|--------------------------------------------------------------------------
	*/

	$(document).ready(function ($) {


		$(document).foundation();


		var imgScale = scaleH(1590, 670, viewW());
		$('.slider .li').height(imgScale);

		if (viewW() > 768)
		{
			$('.callblocks').equalize('outerHeight');
			$('.slidecontrols').equalize('outerHeight');
		}

		/*
		|
		| CUSTOM FUNCTIONS
		|
		|--------------------------------------------------------------------------
		*/

		var slideData = {};
		var slideLength = -1;
		var slideTextData = {};
		var slideTextLength = -1;

		function getSlideText(prevSlide, currentSlide)
		{
			$('.herotext').each(function (i, obj) {

				// make first slide text active
				if (i === 0)
				{
					$(this).addClass('active');
				}

				var slideNum = i;
				var slideId = 'slidetext_' + i;

				// give each slide an id
				$(this).attr('id', slideId);

				// add slide to objext
				slideTextData[parseInt(slideNum, 10)] = slideId;

			});

			$('.slides li').each(function (i, obj) {

					// make first slide text active
					if (i === 0)
					{
						$(this).addClass('active');
					} else {
						$(this).addClass('inactive');
					}

					var slideNum = i;
					var slideId = 'slide_' + i;

					// give each slide an id
					$(this).attr('id', slideId);

					// add slide to objext
					slideData[parseInt(slideNum, 10)] = slideId;

				});

			// var index = 0;

			$.each(slideTextData, function (key, value) {
				slideLength ++;
			});

			$.each(slideTextData, function (key, value) {
				slideTextLength ++;
			});


			$('.slidebutton a').each(function (i) {
				$(this).addClass('itm' + i);

				//  add onclick event to thumbnail to make the main
				// carousel scroll to the right slide
				$(this).click(function () {
					$('.slides').trigger('slideTo', [i, 0, true]);
					return false;
				});
			});


			$('.callblock').each(function (i) {
				$(this).addClass('itm' + i);

				intend($(this), function () {
					$('.herotext').fadeOut('fast').removeClass('active');
					$('.slides').trigger('slideTo', [i, 0, true]);
					$('.slidetext_' + i).fadeIn('fast').addClass('active');
					return false;
				});

			});

			$('.slidebutton ').each(function (i) {
				$(this).addClass('itm' + i);

				intend($(this), function () {
					$('.herotext').fadeOut('fast').removeClass('active');
					$('.slides').trigger('slideTo', [i, 0, true]);
					$('.slidetext_' + i).fadeIn('fast').addClass('active');
					return false;
				});

			});



		}


		function onAfterSlide(c)
		{

			// var curr = parseInt($(c).attr('id').split('_')[1],10);
			// var prev = parseInt(curr,10)-1;
			// var next = parseInt(curr,10)+1;
			// var currStr = curr.toString();
			// var prevStr = prev.toString();
			// var nextStr = next.toString();

			var curr = parseInt($(c).attr('id').split('_')[1], 10);
			var prev;
			if (curr === 0)
			{
				prev = slideTextLength;

			}
			else if (curr === 1) {
				prev = parseInt(curr, 10) - 1;

			}
			else if (curr === 2) {
				prev = parseInt(curr, 10) - 1;

			}
			else {
			//
			}
			// var next = parseInt(curr,10)+1;
			var currStr = curr.toString();
			var prevStr = prev.toString();
			// var nextStr = next.toString();

			// $('#slidetext_' + prevStr).fadeOut('fast');
			// $('#slidetext_' + currStr).fadeIn('fast');
			$('#slidetext_' + currStr).addClass('active');
		}

		function onBeforeSlide(c)
		{

			var curr = parseInt($(c).attr('id').split('_')[1], 10);
			var prev;
			if (curr === 0)
			{
				prev = slideTextLength;
				$('.slidebar').css({'left': '0'});
			}
			else if (curr === 1) {
				prev = parseInt(curr, 10) - 1;
				$('.slidebar').css({'left': '33.333%'});
			}
			else if (curr === 2) {
				prev = parseInt(curr, 10) - 1;
				$('.slidebar').css({'left': '66.666%'});
			}
			else {
				//
			}
			// var next = parseInt(curr,10)+1;
			// var currStr = curr.toString();
			var prevStr = prev.toString();
			// var nextStr = next.toString();

			// $('#slidetext_' + prevStr).removeClass('active').addClass('inactive').fadeOut('fast');
			// $('#slidetext_' + prevStr).fadeOut('fast');
			$('#slidetext_' + prevStr).removeClass('active');

		}


	/*
	|
	| PLUGINS INITS
	|
	|--------------------------------------------------------------------------
	*/

		getSlideText();


		//slider
		$('.slides').carouFredSel({
			responsive: true,
			width: '100%',
			// height: 'auto',
			align: 'center',
			prev: {
				onAfter: function (data) {
					onAfterSlide(data.items.visible);
				},
				onBefore: function (data) {
					onBeforeSlide(data.items.visible);
				},
				easing: 'easeInOutQuint',
				duration: 750
			},
			next: {
				onAfter: function (data) {
					onAfterSlide(data.items.visible);
				},
				onBefore: function (data) {
					onBeforeSlide(data.items.visible);
				},
				easing: 'easeInOutQuint',
				duration: 750
			},
			auto: {
				play: true,
				progress: '.sliderprogress',
				timeoutDuration: 5000,
				easing: 'easeInOutQuint',
				duration: 750,
				onAfter: function (data) {
					onAfterSlide(data.items.visible);
				},
				onBefore: function (data) {
					onBeforeSlide(data.items.visible);
				}
			},
			onCreate: function () {
				$('ul.slides.loading').addClass('loaded');
			}

		},
		{
			wrapper: {
				classname: 'block slider'
			}
		});

	});


	/*
	|--------------------------------------------------------------------------
	|
	| RESIZE
	|
	|--------------------------------------------------------------------------
	*/

	$(window).on('debouncedresize', function () {

		if (viewW() > 768)
		{
			$('.callblocks').equalize({equalize: 'outerHeight', reset: true});
			$('.slidecontrols').equalize({equalize: 'outerHeight', reset: true});
		}
		else
		{
			$('.callblock').removeStyles();
			$('.slidebutton').removeStyles();
		}

	});



});

