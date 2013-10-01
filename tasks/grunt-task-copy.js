/*
|--------------------------------------------------------------------------
|
| GLOBALS OBJECTS
|
|--------------------------------------------------------------------------
*/

var grunt =			require('grunt');
var glob =			require('glob');
var matchdep =		require('matchdep');
var minimatch =		require('minimatch');

var config = {
	pkg:		grunt.file.readJSON('./package.json'),
	project:	grunt.file.readJSON('./_gas_project.json'),
	vendors:	grunt.file.readJSON('./_gas_vendors.json')
};

// END GLOBAL OBJECTS

module.exports = function (grunt) {

	grunt.registerTask('copy:vendor-temp', [
		'copy:temp_js',
		'copy:temp_sass',
		'copy:temp_css',
		'copy:temp_img',
		'copy:temp_fonts'
	]);

	grunt.registerTask('copy:vendor-src', [
		'copy:js',
		'copy:sass',
		'copy:css',
		'copy:img',
		'copy:fonts'
	]);



};

