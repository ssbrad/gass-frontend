requirejs.config({
    baseUrl: 'src/scripts',
    paths: {

		// FRAMEWORK BASE
		jquery:			'libs/jquery.min',
        domReady:		'vendor/requirejs-domready/domReady',
        text:			'vendor/requirejs-text/text',
        foundation:		'vendor/foundation/js/foundation/foundation',


        // FRAMEWORK PERFORMANCE
        debounce:		'vendor/jquery-smartresize/jquery.debouncedresize',
        throttled:		'vendor/jquery-smartresize/jquery.throttledresize',


        // FRAMEWORK UI
        jqueryeasing:	'vendor/jquery-easing/jquery.easing',
        backstretch:	'vendor/jquery-backstretch/jquery.backstretch',
        caroufredsel:	'vendor/caroufredsel/jquery.carouFredSel-6.2.1',
        equalize:		'vendor/equalize/js/equalize',
        picturefill:	'vendor/picturefill/picturefill',
        stickykit:		'vendor/sticky-kit/jquery.sticky-kit'

    },

    shim: {
        foundation: {
            deps: ['jquery']
        },
        debounce: {
            deps: ['jquery']
        },
        throttled: {
            deps: ['jquery']
        },
        jqueryeasing: {
			deps: ['jquery']
        },
        backstretch: {
			deps: ['jquery', 'debounce']
		},
		caroufredsel: {
			deps: ['jquery']
		},
		equalize: {
			deps: ['jquery', 'debounce']
		},
        picturefill: {
            deps: ['jquery']
        },
        stickykit: {
			deps: ['jquery']
		}

    }
});

//GLOBALLY USED JAVASCRIPTS
requirejs([
	'jquery',
	'domReady',
	'foundation'
],	function ($, domReady) {

		domReady(function () {
			$(document).foundation();
		});

	}
);
