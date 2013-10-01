module.exports = {

/*
|--------------------------------------------------------------------------
|
| CONCAT
|
|--------------------------------------------------------------------------
*/

	/**
	* Concatenate JavaScript files
	* https://github.com/gruntjs/grunt-contrib-concat
	* Imports all .js files and appends project banner
	*/
	concat: {
		options: {
			stripBanners: true,
			banner: '<%= banner %>'
		},

		dist: {
			// Files to concatenate #COMEBACK
			src: [
				'<%= project.src.js %>/*.js', 
				'<%= project.src.js %>/**/*.js'
			],

			// Resulting JS file #COMEBACK
			dest: '<%= distscripts %>/dist.js'
		}
	}


};
