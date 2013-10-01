/*
|--------------------------------------------------------------------------
|
| GLOBALS OBJECTS
|
|--------------------------------------------------------------------------
*/

var grunt			= require('grunt');
var glob			= require('glob');
var matchdep		= require('matchdep');
var minimatch		= require('minimatch');

var config = {
	pkg:		grunt.file.readJSON('./package.json'),
	project:	grunt.file.readJSON('./_gas_project.json'),
	vendors:	grunt.file.readJSON('./_gas_vendors.json')
};

// END GLOBAL OBJECTS

module.exports = function (grunt) {

	/*
	| DYNAMIC CONFIG FILES
	|-----------------------------------*/
	var requireConfig = function (x) {
		grunt.util._.extend(config, require(x));
	};

	var dynConfig = function () {
		glob('tasks/options/**/*.js', {mark: true, sync: true}, function (err, matches) {
			var length = matches.length;

			for (var i = 0; i < length; i++) {
				var arrExt = matches[i].replace('.js', '');
				var arrPlus = '../' + arrExt;

				requireConfig(arrPlus);
			}
		});
	};

	dynConfig();

	grunt.config.init(config);
};

