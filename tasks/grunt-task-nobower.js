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

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('nobower', 'A sample task that logs stuff.', function(){

	// var noBower = function(){
		var arrYep = [];
		var arrNope = [];
		var arrComp = [];

		var scrapIt = function(x){
			var dir = x.split("/")[2];
			arrNope.push(dir);
			// console.log(dir + ' scrap');
		};

		var keepIt = function(x){
			var dir = x.split("/")[2];
			arrYep.push(dir);
			// console.log(dir + ' keep');
		};

		var compareIt = function(){

			for (var i=0; i<arrNope.length; i++) {
				comp = arrYep.indexOf(arrNope[i]);

				if (comp <= -1) {
					arrComp.push(arrNope[i]);
				}
			}

			checks(arrComp);
		};

		var deleteIt = function(x){
			console.log(x);
			grunt.file.delete(x);
			grunt.task.run('copy:vendor');
		};

		var checks = function(arr) {

			var scriptsDir =	grunt.template.process('<%= scriptsvendor %>');
			var cssDir =		grunt.template.process('<%= scriptsvendor %>');
			var sassDir =		grunt.template.process('<%= scriptsvendor %>');
			var imagesDir =		grunt.template.process('<%= scriptsvendor %>');

			for (var i=0; i<arr.length; i++) {

				var folder = scriptsDir+'/'+arr[i];
				// console.log(folder);

				var jsExist = grunt.file.isDir(folder);
				// console.log(jsExist);

				if (jsExist === true) {
					console.log(folder);
					deleteIt(folder);
				}
				else {
					//
				}

			}

			// console.log(js);
			// var jsProcess = grunt.template.process('<%= scriptsvendor %>');
			// var jsExist = grunt.file.isDir(folder);
			// console.log(jsExist);
			// console.log(jsProcess);
		};

		glob('./temp_bower/**/*.json', {mark: true, sync:true}, function (err, matches) {
			// console.log(matches);
			for (var i = 0; i < matches.length; i++) {

				if (matches[i].indexOf('/bower.json') !== -1){
					keepIt(matches[i]);
					// console.log(matches[i] + ' has bower');
				}
				else if (matches[i].indexOf('/component.json') !== -1){
					keepIt(matches[i]);
					// console.log(matches[i] + ' has component');
				}
				else {
					scrapIt(matches[i]);
				}
			}
			compareIt();
		});

		// console.log(arrYep);
		// console.log(arrComp);

	});

};
