/*global $:false, jQuery:false */

requirejs([
	'jquery',
	'domReady',
	'debounce'

],	function ($, domReady) {

	'use strict';

	/*
	|--------------------------------------------------------------------------
	|
	| GLOBALS
	|
	|--------------------------------------------------------------------------
	*/



	/*
	|--------------------------------------------------------------------------
	|
	| DOC READY
	|
	|--------------------------------------------------------------------------
	*/

	$(document).ready(function ($) {

		// var test = viewH();
		// console.log(test + 'loaded and using' );

	});


	/*
	|--------------------------------------------------------------------------
	|
	| RESIZE
	|
	|--------------------------------------------------------------------------
	*/

	$(window).on('debouncedresize', function () {


	});



});

