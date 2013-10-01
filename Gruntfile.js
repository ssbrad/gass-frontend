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

module.exports = function(grunt) {

/*
|--------------------------------------------------------------------------
|--------------------------------------------------------------------------
|
| LOAD TASKS
|
|--------------------------------------------------------------------------
|--------------------------------------------------------------------------
*/

	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	grunt.task.loadTasks('tasks');

	/*
	| EXTERNAL TASKS
	|-----------------------------------*/

	//|  grunt bower:install	- GOOD
	//|  grunt clean:nobower	- BAD
	//|  grunt concat:install	- GOOD
	//|  grunt copy:laravel		- GOOD
	//|  grunt copy:vendor		- PARTIAL
	//|  grunt shell			- N/A
	//|  grunt uglify			- GOOD

/*
|--------------------------------------------------------------------------
|--------------------------------------------------------------------------
|
| REGISTER TASKS
|
|--------------------------------------------------------------------------
|--------------------------------------------------------------------------
*/

	grunt.registerTask('default', [
		'watch'
	]);

	// grunt.registerTask('build', [
	// 	'sass:dist',
	// 	'bower:dist',
	// 	'autoprefixer:dist',
	// 	'cssmin:dist',
	// 	'clean:dist',
	// 	'jshint',
	// 	'uglify'
	// ]);

};
