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
var minimatch =		require("minimatch");

var config = {
	pkg: grunt.file.readJSON('./package.json'),
	project: grunt.file.readJSON('./project.json'),
	vendor: grunt.file.readJSON('./vendors.json')
};

// END GLOBAL OBJECTS

module.exports = function(grunt) {

copy: {
		vendor: {
			files: [
				{
					expand: true,
					cwd: '<%= project.src.vendor %>',
					src: [
						'<%= vendor.js %>'
					],
					dest: '<%= project.src.js %>/vendor'
				}
			]
		}
	}

};
